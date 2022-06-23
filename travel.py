import scrapy
from scrapy.crawler import CrawlerProcess

class TravelSpider(scrapy.Spider):

    
    name = 'travel'
    
    def __init__(self, category='travel_2', *args, **kwargs):
        super().__init__(*args, **kwargs)

        print("[CATEGORY]:",  category)

        self.start_urls = [
            f"https://books.toscrape.com/catalogue/category/books/{category}"
        ]


    def parse(self, response):
        title = response.css('h3 a').attrib['title']
        price = response.css('p.price_color::text').get()

        print("[TITLE]:", title)
        print("[Price]:", price)

crawler = CrawlerProcess(settings={
    'ROBOTSTXT_OBAY': False,
})
crawler.crawl(TravelSpider)

crawler.start()