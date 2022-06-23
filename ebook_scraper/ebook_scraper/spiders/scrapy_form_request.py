from gc import callbacks
import scrapy
from ebook_scraper.items import EbookItem
from scrapy.loader import ItemLoader



class ScrapyFormRequest(scrapy.Spider):
    name = 'scrapy_form_request'

    start_urls = [
        "http://www.scrapethissite.com/pages/advanced/?gotcha=csrf"
    ]

    def parse(self, response):
        csrf_token = response.css("input[name='csrf']").attrib['value']

        print(" [CSRF]: ", csrf_token)

        yield scrapy.FormRequest(
            self.start_urls[0],
            formdata={
                'user': 'asdf;lkj',
                'pass': 'asdf;lkj',
                'csrf': csrf_token,
            },
            callback=self.parse_login
        )

    def parse_login(self, response):
        print("[Result]:", response.css('div.row div::text').get().strip())    


