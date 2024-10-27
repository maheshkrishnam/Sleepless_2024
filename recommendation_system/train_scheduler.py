import joblib
from db_connection import fetch_data
from preprocessing import preprocess_data
from recommendation_model import RecommendationModel
import schedule
import time

def nightly_training():
    data = fetch_data()
    data, _ = preprocess_data(data)
    model = RecommendationModel()
    model.train(data)
    joblib.dump(model, 'recommendation_model.pkl')
    print("Model trained and saved.")

schedule.every().day.at("02:00").do(nightly_training)

if __name__ == "__main__":
    nightly_training()  # Manually trigger for immediate training if needed
    while True:
        schedule.run_pending()
        time.sleep(1)
