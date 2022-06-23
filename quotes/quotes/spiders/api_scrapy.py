import scrapy
import json
class ApiQuoteSpider(scrapy.Spider):
    name = 'api_quote'

    start_urls = [
        "https://quotes.toscrape.com/api/quotes?page=1"
    ]

    async def parse(self, response):
        dt = json.loads(response.body)
        
        yield dt

        if dt['has_next']:
            yield scrapy.Request(
                f"https://quotes.toscrape.com/api/quotes?page={dt['page'] + 1}"
            )




