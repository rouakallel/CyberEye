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
        # Vous pouvez accéder aux données JSON ici
        file_types = data.get('fileTypes')
        categories = data.get('categories')

        # Effectuez le traitement des données ici, par exemple, renvoyez les données sous forme de réponse JSON
        response_data = {
            'fileTypes': file_types,
            'categories': categories
        }
    
        return response_data, 200
    else:
        return {'error': 'Données JSON manquantes dans la requête.'}, 400
        

if __name__ == "__main__":
    app.run(debug=True, port=5000)



# Configuration de la journalisation
logging.basicConfig(filename='app.log', level=logging.DEBUG)





