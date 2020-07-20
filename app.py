import numpy as np
import pandas as pd
import datetime as dt
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify


#################################################
# Database Setup
#################################################
#engine = create_engine("sqlite:////Users/anirbanmukherjee/Desktop/Anaconda/sqlalchemy-challenge/Code/hawaii.sqlite")
engine = create_engine("postgresql://postgres:postgres@localhost:5432/Project2")


# reflect an existing database into a new model
#Base = automap_base()
connection = engine.connect()

# reflect the tables
#Base.prepare(engine, reflect=True)

# Save reference to the table
#Date = pd.read_sql("select full_date from MassShootingData", connection)

#print(Date)
#Measurement = Base.classes.vmassshootings

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################


#start of actual code
@app.route("/api/v1.0/shooting")
def tobs():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    

    #tempdata = []
    tempdata = [
        {'State':"California",'Shootings':26,'Victims Killed':179},
        {'State':"Texas",'Shootings':18,'Victims Killed':154},
        {'State':"Florida",'Shootings':13,'Victims Killed':130},
        {'State':"Nevada",'Shootings':3,'Victims Killed':66},
        {'State':"Pennsylvania",'Shootings':10,'Victims Killed':53}
    ]


    session.close()

#    Convert list of tuples into normal list
        
    return jsonify(tempdata)



if __name__ == '__main__':
    app.run()
