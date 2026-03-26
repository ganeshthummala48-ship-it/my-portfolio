from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return jsonify({"message": "Portfolio Backend is running. Please access the website at http://localhost:5173"}), 200

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    # In a real app, you might send an email or save to a database here
    print(f"Received message from {name} ({email}): {message}")
    
    return jsonify({"status": "success", "message": "Message received!"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
