"""
This is the main py file and entry point to the program. It connencts to the
mySQL database, contains url routes and mySQL queries.  
"""


from flask import Flask, jsonify, render_template
import mysql.connector
from config import config


app = Flask(__name__)


db = mysql.connector.connect(**config)
cursor = db.cursor()


@app.route("/")
def index():
    """send html to the home page"""

    return render_template('index.html')


@app.route("/titles")
def titles():
    """queries the db and returns book titles as json."""

    cursor.execute("SELECT title FROM novels")
    result = cursor.fetchall()
    output = []
    for x in result:
        x = x[0]
        output.append(x)
    return jsonify(output)


@app.route("/subseries")
def titles_and_subseries():
    """queries the db and returns book titles and subseries as json."""

    cursor.execute(
        """SELECT novels.title, subseries.subseries_name FROM novels
        INNER JOIN subseries ON novels.subseries_id = subseries.subseries_id"""
    )
    result = cursor.fetchall()
    output = []
    for x in result:
        x = f"Title: {x[0]}, Subseries: {x[1]}"
        output.append(x)
    return jsonify(output)
