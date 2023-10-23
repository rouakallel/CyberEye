import scrapy


class FirstspiderSpider(scrapy.Spider):
    name = "firstspider"
    allowed_domains = ["google.com"]
    start_urls = ["http://google.com/"]

    def parse(self, response):
        pass
