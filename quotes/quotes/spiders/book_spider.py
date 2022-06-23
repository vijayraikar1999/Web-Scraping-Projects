import scrapy
from quotes.utils import log

class BookSpider(scrapy.Spider):
    name = 'book'
    
    def __init__(self, category='travel_2', *args, **kwargs):
        super().__init__(*args, **kwargs)

        print("[CATEGORY]:",  category)

        self.start_urls = [
            f"https://books.toscrape.com/catalogue/category/books/{category}"
        ]


    def parse(self, response):
        title = response.css('h3 a').attrib['title']
        price = response.css('p.price_color::text').get()

        log(title, decor='*', padding=4)
        log(price, decor='~', padding=4)