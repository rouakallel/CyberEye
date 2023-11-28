import scrapy
from urllib.parse import urlparse, parse_qs
import pandas as pd
from bs4 import BeautifulSoup

class FilespiderSpider(scrapy.Spider):
    name = "FileSpider"

    def __init__(self, *args, **kwargs):
        super(FilespiderSpider, self).__init__(*args, **kwargs)
        self.start_urls = kwargs.get('start_urls', [])

    def start_requests(self):
        keyword1 = getattr(self, 'keyword1', '')
        keyword2 = getattr(self, 'keyword2', '')
        query = f'intext:"{keyword1}" filetype:{keyword2}'
        URL = f"https://www.google.com/search?q={query}&num=99"

        # Utilisez Scrapy pour effectuer la requête
        yield scrapy.Request(url=URL, callback=self.parse)

    def parse(self, response):
        csv_filename = 'linkList.csv'
        soup = BeautifulSoup(response.body, "html.parser")
        link_list = self.get_links(soup)

        for link in link_list:
            wanted_link = self.clean_link(link)
            yield {'link': wanted_link}

        df = pd.DataFrame({'link': link_list})
        df.to_csv(csv_filename, index=False)

    def get_links(self, soup):
        link_list = []
        divs = soup.find_all('div')
        for div in divs:
            anchor = div.find_all('a', jsname="UWckNb")
            for a in anchor:
                link = a['href']
                link_list.append(link)
        return link_list

    def clean_link(self, link):
        url = urlparse(link)
        qs = parse_qs(url.query)
        new_link = qs.get('q', [''])[0]
        return new_link

