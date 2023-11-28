import requests 

with open ("valid_proxies.txt","r") as f:
    proxies = f.read().split("\n")

sites_to_check = ["https://google.com"]

counter = 0

for site in sites_to_check:
    try:
        print(f"Using the proxy:{proxies[counter]}")
        res =  requests.get(site, proxies={"http":proxies[counter],
                                           "https":proxies[counter]})
        print(res.status_code)
        print(res.text)
    except:
        print("Failed proxy lookup Ya rourou")   
    finally: 
        counter += 1      
        counter % len(proxies)