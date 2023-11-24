import scrapy
from urllib.parse import urlparse, parse_qs
import requests
import pandas as pd
import numpy as np
from bs4 import BeautifulSoup
from fake_useragent import UserAgent
import time

def get_links(soup):
    link_list = []
    for g in soup.find_all('div',  {'class':'g'}):
        anchors = g.find_all('a')
        if anchors:
            link = anchors[0]['href']
            title = g.find('h3').text
            try:
                description = g.find('div', {'data-sncf':'2'}).text
            except Exception as e:
                description = "-"
            link_list.append(str(title)+";"+str(link)+';'+str(description))
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
        kws_list = [f'intext:"{keyword1}" filetype: {keyword2}']
        


        user_agent = UserAgent()
        # Utilisez les liens extraits comme start_urls
        if self.start_urls:
            for url in self.start_urls:
                yield scrapy.Request(url=url, callback=self.parse,headers={'User-Agent': user_agent.random})
        else:
            for query in kws_list:
                csv_filename = 'linkList.csv'
                URL = f"https://google.com/search?q={query}&num=99"
                next_url = URL
                links = 0
                list_of_links = []

                time.sleep(np.random.randint(2, 6))
                resp = requests.get(next_url, headers={'User-agent': user_agent.random})

                if resp.status_code == 200:
                    soup = BeautifulSoup(resp.content, "html.parser")
                    link_list = get_links(soup)
                    print('The links ', link_list)

                    for link in link_list:
                        wanted_link = link
                        list_of_links.append(wanted_link)
                        links += 1

                    df = pd.DataFrame(list_of_links)
                    df.to_csv(csv_filename, mode='a', header=False)

                else:
                    print('Scraping stopped / blocked!!')