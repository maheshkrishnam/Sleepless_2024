import pandas as pd
from sklearn.preprocessing import LabelEncoder

def preprocess_data(data):
    # Fill missing values if necessary
    data.fillna({'rating': data['rating'].mean(), 'price': data['price'].median()}, inplace=True)
    
    # Label encode product categories
    le = LabelEncoder()
    data['product_category'] = le.fit_transform(data['product_category'])
    return data, le
