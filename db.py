from flask import Flask, jsonify
import mysql.connector
from config import config

db = mysql.connector.connect(**config)
cursor = db.cursor()

def query_all():
    cursor.execute("SELECT * FROM novels")
    result = cursor.fetchall()
    for x in result:
        x = x[2]
        print(x)
    db.close()
    cursor.close()

def query_titles():
    cursor.execute("SELECT title FROM novels")
    result = cursor.fetchall()
    output = []
    for x in result:
        x = x[0]
        output.append(x) 
    return jsonify(output)        
        
    db.close()
    cursor.close()     


