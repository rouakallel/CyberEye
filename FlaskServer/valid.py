import requests
from fake_useragent import UserAgent
from dotenv import load_dotenv
import os 



load_dotenv() 
api_key = os.environ.get('PROXYSCRAPE_API_KEY')
# Fonction pour obtenir une liste de proxies
def get_proxies(api_key):
    proxy_url = f'https://api.proxyscrape.com/v2/account/datacenter_shared/proxy-list?auth={api_key}&type=getproxies&country[]=all&protocol=http&format=normal&status=all'
    response = requests.get(proxy_url)
    
    if response.status_code == 200:
        proxy_list = response.text.split('\r\n')
        return proxy_list
    else:
        print(f"Failed to fetch proxy list. Status code: {response.status_code}")
        return None

# Fonction pour tester la validité d'un proxy
def test_proxy(proxy):
    test_url = "https://www.google.com"
    try:
        response = requests.get(test_url, proxies={'http': f'http://{proxy}', 'https': f'https://{proxy}'}, timeout=10)
        return response.status_code == 200
    except requests.RequestException:
        return False


proxies = get_proxies(api_key)


valid_proxies = [proxy for proxy in proxies if test_proxy(proxy)]

if valid_proxies:
    print("Proxies valides:")
    for proxy in valid_proxies:
        print(proxy)
else:
    print("Aucun proxy valide disponible.")
