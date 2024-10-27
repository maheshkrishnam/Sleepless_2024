import streamlit as st
import pandas as pd

# Configure Cloudinary if you plan to use it
# Uncomment and fill with your credentials if needed
# import cloudinary
# import cloudinary.api
# cloudinary.config(
#     cloud_name="YOUR_CLOUD_NAME",  # Replace with your Cloudinary cloud name
#     api_key="YOUR_API_KEY",         # Replace with your Cloudinary API key
#     api_secret="YOUR_API_SECRET"    # Replace with your Cloudinary API secret
# )

def get_products():
    # Example product data; replace this with actual fetching logic
    return pd.DataFrame({
        'image': [
            "./image/1.jpg",
            "./image/2.jpg",
            "./image/3.jpg",
            "./image/4.jpg",
            "./image/5.jpg",
            "./image/6.jpg"
        ],
        'title': ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5', 'Product 6'],
        'price': [1000, 1500, 2000, 2500, 3000, 3500],
        'salePrice': [800, 1200, 1800, 2200, 2900, 3300]
    })

def main():
    st.set_page_config(page_title=" Product Recommendation ", layout="wide")
    
    # Sidebar navigation
    st.sidebar.title("Navigation")
    page = st.sidebar.radio("Go to", ["Home"])

    if page == "Home":
        display_home()

def display_home():
    st.title("Welcome to IIT Dharwad Campus Bazar")
    st.markdown("""Explore our vast range of products. Find the best deals and get personalized recommendations.""")
    
    products = get_products()
    st.subheader("Recommended Products")
    
    # Display products in a grid
    cols = st.columns(3)
    for i, product in products.iterrows():
        with cols[i % 3]:
            # Ensure the image URL is properly formed
            image_url = product['image']
            if image_url:  # Check if image URL exists
                st.image(image_url, width=150)
            else:
                st.image("https://via.placeholder.com/150", width=150)  # Fallback image
            st.write(f"**{product['title']}**")
            st.write(f"**Price:** ₹{product['price']}")
            if product['salePrice'] > 0:
                st.write(f"**Sale Price:** ₹{product['salePrice']}")
            st.write("---")


if __name__ == "__main__":
    main()
