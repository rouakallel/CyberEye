from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import requests

app = Flask(__name__)
@app.route('/', methods=['POST','GET'])
def hello():
    return 'Hello, Flask is running!'
@app.route('/submit', methods=['POST','GET'])
def submit_form():
    try:
        data = request.get_json()
        keyword1 = data.get('keyword1', '')
        keyword2 = data.get('keyword2', '')
        print(keyword1)
        user_agent = UserAgent()
        query = f'intext:"{keyword1}" filetype: {keyword2}'
        url = f"https://google.com/search?q={query}&num=99"
        header={'User-Agent': user_agent.random}
        data = requests.get(url, headers=header)

        if data.status_code == 200:
            soup = BeautifulSoup(data.content, "html.parser")
            results = []
            for g in soup.find_all('div',  {'class':'g'}):
                anchors = g.find_all('a')
                if anchors:
                    link = anchors[0]['href']
                    title = g.find('h3').text
                    try:
                        description = g.find('div', {'data-sncf':'2'}).text
                    except Exception as e:
                        description = "-"
                    results.append(str(title)+";"+str(link)+';'+str(description))
        else:
            return jsonify({'error': 'Failed to fetch Google search results'}), data.status_code            

        with open("serp.csv", "w") as f:
            f.write("Title; Link; Description\n")

        for result in results:
            with open("serp.csv", "a", encoding="utf-8") as f:
                f.write(str(result)+"\n")

        return jsonify({'success': True,'results': results}), 200
    except Exception as e:
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1' ,port=5000)
