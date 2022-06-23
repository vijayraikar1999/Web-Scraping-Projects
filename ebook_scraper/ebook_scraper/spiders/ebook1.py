import scrapy
from ebook_scraper.items import EbookItem
from scrapy.loader import ItemLoader



class EbookSpider(scrapy.Spider):
    name = 'ebook1'

    # start_urls = [
    #     'https://books.toscrape.com/catalogue/category/books/sequential-art_5/index.html',
    # ]

    def __init__(self):
        super().__init__()
        self.page_count = 1
        self.total_pages = 4

    def start_requests(self):
        base_url = "https://books.toscrape.com/catalogue/category/books/sequential-art_5"

        while self.page_count <= self.total_pages:
            yield scrapy.Request(f"{base_url}/page-{self.page_count}.html")
            self.page_count += 1

    def parse(self, response):

        self.page_count += 1

        print('[ OUR RESPONSE ]')

        ebooks = response.css("article.product_pod")

        for ebook in ebooks:
            loader = ItemLoader(item=EbookItem(), selector=ebook)


            loader.add_css('title', "h3 a::attr(title)")
            loader.add_css('price', "p.price_color::text")


            yield loader.load_item()

    


