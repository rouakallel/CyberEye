from flask import Flask, request, jsonify
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
from dotenv import load_dotenv
import requests
import time
import os 
import random
app = Flask(__name__)

load_dotenv() 
api_key = os.environ.get('PROXYSCRAPE_API_KEY')

def get_proxies():
    
    proxy_url = f'https://api.proxyscrape.com/v2/account/datacenter_shared/proxy-list?auth={api_key}&type=getproxies&country[]=all&protocol=http&format=normal&status=all'

    response = requests.get(proxy_url)

    if response.status_code == 200:
        
        proxy_list = response.text.split('\r\n')
        return proxy_list
    else:
        print(f"Failed to fetch proxy list. Status code: {response.status_code}")
        return None


proxies = get_proxies()

if proxies:
    print("Proxies:")
    for proxy in proxies:
        print(proxy)
else:
    print("Aucun proxy disponible.")


def get_file_extension(url):
    return os.path.splitext(url)[1][1:]

def save_results_to_csv(results, filename):
    with open(filename, "w") as f:
        f.write("Title; Link; Description\n")

    for result in results:
        with open(filename, "a", encoding="utf-8") as f:
            f.write(str(result) + "\n")


@app.route('/', methods=['POST', 'GET'])
def hello():
    return 'Hello, Flask is running!'

@app.route('/submit', methods=['POST', 'GET'])
def submit_form():
    try:
        data = request.get_json()
        keyword = data.get('keyword', '')
        print(keyword)
        user_agent = UserAgent()
        query = f'intext:"{keyword}"  filetype:txt OR filetype:xls OR filetype:csv '
        url = f"https://google.com/search?q={query}&num=99"
        header={'User-Agent': user_agent.random}
        
        http_proxy = random.choice(proxies)
        print(http_proxy)
        
        proxy = {'http': f'http://{http_proxy}'}
        data = requests.get(url, headers=header,proxies=proxy)
        if data.status_code == 200:
            soup = BeautifulSoup(data.content, "html.parser")
            results = []
            file_type_counts = {}
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
                    file_extension = get_file_extension(link)
                    file_type_counts[file_extension] = file_type_counts.get(file_extension, 0) + 1
        else:
            return jsonify({'error': 'Failed to fetch Google search results'}), data.status_code   

        print("Results:", results)
        timestamp = time.strftime("%Y%m%d%H%M%S")
        filename = f'serp_{timestamp}.csv'
        save_results_to_csv(results, filename)
        print("Results saved to CSV")

        return jsonify({
            'success': True,
            'results': results,
            'url': url,
            'result_count': len(results),
            'file_type_counts': file_type_counts
            }), 200

    except Exception as e:
        return jsonify({'error': 'Internal Server Error'}), 500


@app.route('/submit2', methods=['POST', 'GET'])
def submit2_form():
    try:
        data = request.get_json()
        keyword = data.get('keyword', '')
        print(keyword)
        user_agent = UserAgent()
        query = f'intext:"{keyword}" site:pastebin.com'
        url = f"https://google.com/search?q={query}&num=99"
        header={'User-Agent': user_agent.random}
        http_proxy = random.choice(proxies)
        print(http_proxy)
        
        proxy = {'http': f'http://{http_proxy}'}
        data = requests.get(url, headers=header,proxies=proxy)


        if data.status_code == 200:
            soup = BeautifulSoup(data.content, "html.parser")
            results = []
            file_type_counts = {}
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
                    file_extension = get_file_extension(link)
                    file_type_counts[file_extension] = file_type_counts.get(file_extension, 0) + 1
        else:
            return jsonify({'error': 'Failed to fetch Google search results'}), data.status_code   


        timestamp = time.strftime("%Y%m%d%H%M%S")
        filename = f'serp_{timestamp}.csv'
        with open(filename, "w") as f:
            f.write("Title; Link; Description\n")

        for result in results:
            with open(filename, "a", encoding="utf-8") as f:
                f.write(str(result)+"\n")

        return jsonify({
            'success': True,
            'results': results,
            'url': url,
            'result_count': len(results),
            'file_type_counts': file_type_counts
            }), 200

    except Exception as e:
        return jsonify({'error': 'Internal Server Error'}), 500        

@app.route('/submit3', methods=['POST', 'GET'])
def submit3_form():
    try:
        data = request.get_json()
        keyword = data.get('keyword', '')
        print(keyword)
        user_agent = UserAgent()
        query = f'site:"{keyword}" inurl:" /wp-content/uploads" '
        url = f"https://google.com/search?q={query}&num=99"
        header={'User-Agent': user_agent.random}

        http_proxy = random.choice(proxies)
        print(http_proxy)
        
        proxy = {'http': f'http://{http_proxy}'}
        data = requests.get(url, headers=header,proxies=proxy)
         
         
        if data.status_code == 200:
            soup = BeautifulSoup(data.content, "html.parser")
            results = []
            file_type_counts = {}
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
                    file_extension = get_file_extension(link)
                    file_type_counts[file_extension] = file_type_counts.get(file_extension, 0) + 1
        else:
            return jsonify({'error': 'Failed to fetch Google search results'}), data.status_code   


        timestamp = time.strftime("%Y%m%d%H%M%S")
        filename = f'serp_{timestamp}.csv'
        with open(filename, "w") as f:
            f.write("Title; Link; Description\n")

        for result in results:
            with open(filename, "a", encoding="utf-8") as f:
                f.write(str(result)+"\n")

        return jsonify({
            'success': True,
            'results': results,
            'url': url,
            'result_count': len(results),
            'file_type_counts': file_type_counts
            }), 200
    except Exception as e:
        return jsonify({'error': 'Internal Server Error'}), 500

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)

