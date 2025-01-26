from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# Dictionary storing the 12 main possible combinations
study_spots = [
    {"name": "EV3 Top Floor", "noise_level": "self-study", "aesthetic": "nature", "food": "yes"},
    {"name": "SLC (2nd and 3rd floor)", "noise_level": "duo-study", "aesthetic": "nature", "food": "yes"},
    {"name": "Hagey Hall 1101", "noise_level": "group-study", "aesthetic": "modern", "food": "yes"},
    {"name": "DWE 1502 or 3518", "noise_level": "self-study", "aesthetic": "cozy", "food": "no"},
    {"name": "STC", "noise_level": "duo-study", "aesthetic": "cozy", "food": "yes"},
    {"name": "QNC", "noise_level": "duo-study", "aesthetic": "modern", "food": "no"},
    {"name": "EV1", "noise_level": "group-study", "aesthetic": "nature", "food": "yes"},
    {"name": "DP", "noise_level": "group-study", "aesthetic": "minimalistic", "food": "yes"},
    {"name": "DC", "noise_level": "self-study", "aesthetic": "modern", "food": "yes"},
    {"name": "MC: Bloomberg Lab, Mac Lab", "noise_level": "self-study", "aesthetic": "minimalistic", "food": "yes"},
    {"name": "Phy 313", "noise_level": "duo-study", "aesthetic": "minimalistic", "food": "no"},
    {"name": "Great Hall or Residential Lounges (V1/REV/CMH/MKV/UWP)", "noise_level": "group-study", "aesthetic": "cozy", "food": "yes"}
]

# Study spot finder
@app.route('/find_study_spot', methods=['POST'])
def find_study_spot():
    data = request.get_json()
    noise_level = data['noise_level']
    aesthetic = data['aesthetic']
    food = data['food']

    # Search for the matching study spot
    for spot in study_spots:
        if spot["noise_level"] == noise_level and spot["aesthetic"] == aesthetic and spot["food"] == food:
            # Updated output message
            return jsonify({"studySpot": f'{spot["name"]} matches your preference'})

    # Default if no exact match
    return jsonify({"studySpot": "SLC (2nd and 3rd floor) matches your preference"})

if __name__ == '__main__':
    app.run(debug=True)