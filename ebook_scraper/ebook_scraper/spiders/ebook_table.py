import scrapy
from ebook_scraper.items import EbookItem
from scrapy.loader import ItemLoader



class EbookSpider(scrapy.Spider):
    name = 'ebook2'

    start_urls = [
        "https://books.toscrape.com/catalogue/its-only-the-himalayas_981/index.html"
    ]

    def parse(self, response):
        table = response.css('table')

        product_details = {}

        for row in table.css('tr'):

            heading = row.css('th::text').get()
            data = row.css('td::text').get()

            product_details[heading] = data

        yield product_details    


