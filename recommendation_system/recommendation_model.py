import pandas as pd

class RecommendationModel:
    def __init__(self):
        self.data = None
    
    def load_data(self, data):
        self.data = data
    
    def recommend(self, product_id):
        # Find the category of the selected product
        selected_product = self.data.loc[product_id]
        selected_category = selected_product['category']
        
        # Recommend products from the same category excluding the selected product
        recommended_products = self.data[self.data['category'] == selected_category]
        recommended_products = recommended_products[recommended_products.index != product_id]
        
        return recommended_products[['title', 'price', 'salePrice', 'image', 'category']]

