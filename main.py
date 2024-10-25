from flask import Flask, jsonify, render_template
import mysql.connector
from config import config


app = Flask(__name__)


db = mysql.connector.connect(**config)
cursor = db.cursor()


@app.route("/")
def index():
    return render_template('index.html')

@app.route("/titles")
def titles():
    db = mysql.connector.connect(**config)
    cursor = db.cursor()

    cursor.execute("SELECT title FROM novels")
    result = cursor.fetchall()
    output = []
    for x in result:
        x = x[0]
        output.append(x) 
    return jsonify(output)        
        
    db.close()
    cursor.close()    
    
