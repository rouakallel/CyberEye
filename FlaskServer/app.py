from flask import Flask, request
from flask_cors import CORS
import logging
import json

app = Flask(__name__)
CORS(app, resources={r"/submit": {"origins": "http://localhost:3000"}})
# API Route
@app.route('/submit', methods=['GET','POST'])
def submit_form():
    data = request.get_json()
    print('This to verify the result',data)
    if data:
        categorie = [key for key, value in data['categories'].items() if value]
        file_type = [key for key, value in data['fileTypes'].items() if value]

        print("Selected categorie:", categorie)
        print("Selected file type:", file_type)
    
        return categorie, 200
    else:
        return {'error': 'Données JSON manquantes dans la requête.'}, 400
        

if __name__ == "__main__":
    app.run(debug=True, port=5000)



# Configuration de la journalisation
logging.basicConfig(filename='app.log', level=logging.DEBUG)





