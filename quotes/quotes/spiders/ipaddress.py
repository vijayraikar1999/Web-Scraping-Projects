import scrapy
import json
class IpQuoteSpider(scrapy.Spider):
    name = 'api_quote'

    start_urls = [
        "https://quotes.toscrape.com/api/quotes?page=1"
    ]

    # def start_requests(self):
    #     yield scrapy.Request(
    #         "https://quotes.toscrape.com/api/quotes?page=1",
    #         meta={
    #             'proxy': '151.106.17.124'
    #         }
    #     )

    async def parse(self, response):
        dt = json.loads(response.body)
        
        yield dt

        if dt['has_next']:
            yield scrapy.Request(
                f"https://quotes.toscrape.com/api/quotes?page={dt['page'] + 1}"
            )




