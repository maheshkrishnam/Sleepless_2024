# Sleepless_2024
## Campus Bazar  
- Empowering Campus Communities with a Sustainable, AI-Driven Marketplace for Seamless Buying and Selling.
- Our platform empowers campus communities with a dynamic, AI-driven marketplace that simplifies inventory management for vendors, enhances shopping experiences, and promotes sustainable practices like second-hand sales and eco-friendly purchasing.

## [Watch Demo Video](https://youtu.be/lKpgtE0nRAk)

## Features
--> User Features:
1. Browse products by category
2. Product search and filters
3. Add products to cart
4. Secure user authentication (Sign up/Login)
5. Order history and details
6. Responsive design for mobile and desktop
7. Admin Features:
8. Manage products (Add, Edit, Delete)
9. AI Recommendation System based on user purchase.

## Tech Stack
- Frontend: React, Redux, Tailwind
- Backend: Node.js, Express
- Database: MongoDB
- Image Hosting: Cloudinary

## Steps to be followed.
### 1. Clone the repository
- git clone https://github.com/maheshkrishnam/Sleepless_2024.git
- cd Sleepless_2024

### 2. Install frontend dependencies
- cd client
- npm install

### 3. Install server dependencies
- cd ../server
- npm install

### 4. Running recomendation system
- cd ../recommendation_system
- Ensure that you have python and pip installed
- pip install pymongo scikit-learn pandas streamlit schedule
- python -m streamlit run your_script.py

### 5. Environment Variables
Create a .env file in the server folder and add the following environment variables:
#### .env
- MONGO_URI="your-mongodb-connection-string"
- CLOUDINARY_NAME="your-cloudinary-name"
- CLOUDINARY_API_KEY="your-cloudinary-api-key"
- CLOUDINARY_API_SECRET="your-cloudinary-api-secret"

### 6. Running the Server
Backend: Start the backend server.
- cd server
- npm run dev

Frontend: Start the React frontend.
- cd client
- npm run dev
