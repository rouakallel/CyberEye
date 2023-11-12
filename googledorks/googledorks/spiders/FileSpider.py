import scrapy
from urllib.parse import urlparse, parse_qs
import requests
import pandas as pd
import numpy as np
from bs4 import BeautifulSoup
import time

def get_links(soup):
    link_list = []
    divs = soup.find_all('div', class_='kCrYT')
    for div in divs:
        anchor = div.find_all('a')
        for a in anchor:
            link = a['href']
            link_list.append(link)
    return link_list

def clean_link(link):
    url = urlparse(link)
    qs = parse_qs(url.query)
    new_link = qs.get('q', [''])[0]
    return new_link

class FilespiderSpider(scrapy.Spider):
    name = "FileSpider"

    def __init__(self, *args, **kwargs):
        super(FilespiderSpider, self).__init__(*args, **kwargs)
        self.start_urls = kwargs.get('start_urls', [])

    def start_requests(self):
       
        keyword1 = getattr(self, 'keyword1', '')
        keyword2 = getattr(self, 'keyword2', '')
        kws_list = [f'intext:"{keyword1}" filetype: "{keyword2}"']
        
        # Utilisez les liens extraits comme start_urls
        if self.start_urls:
            for url in self.start_urls:
                yield scrapy.Request(url=url, callback=self.parse)
        else:
            for query in kws_list:
                URL = f"https://google.com/search?q={query}&num=99"
                next_url = URL
                pages = 0
                links = 0
                list_of_links = []

                while True:
                    time.sleep(np.random.randint(2, 6))
                    resp = requests.get(next_url, headers={'User-agent': self.settings['USER_AGENT']})
                    if resp.status_code == 200:
                        soup = BeautifulSoup(resp.content, "html.parser")
                        link_list = get_links(soup)

                        for link in link_list:
                            wanted_link = clean_link(link)
                            list_of_links.append(wanted_link)
                            links += 1
                            print(links)

                        df = pd.DataFrame(list_of_links)
                        df.to_csv('link_list.csv', mode='a', header=False)

                        nexto = soup.find('a', class_="nBDE1b G5eFlf")
                        pages += 1

                        if nexto is None:
                            break
                        else:
                            next_url = 'https://www.google.com' + nexto['href']
                            print(pages)
                    else:
                        print('Scraping stopped / blocked!!')
                        print(f"query: {query}, page number: {str(pages)}")
                        break

