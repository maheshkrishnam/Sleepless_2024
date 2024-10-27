MONGO_PASSSWORD = "Oc6ovUCMzr8Qndlc"
MONGO_URI = "mongodb+srv://maheshkrishnam:Oc6ovUCMzr8Qndlc@cluster0.womg8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

from pymongo import MongoClient
import pandas as pd

def connect_mongo():
    client = MongoClient("your_mongodb_atlas_connection_string")
    db = client['your_db_name']
    collection = db['your_collection_name']
    return collection

def fetch_data():
    collection = connect_mongo()
    data = pd.DataFrame(list(collection.find()))
    data.drop(columns=['_id'], inplace=True, errors='ignore')
    return data
