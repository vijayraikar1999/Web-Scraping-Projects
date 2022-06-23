import scrapy
from scrapy.selector import Selector
from scrapy_playwright.page import PageCoroutine

class OscarSpider(scrapy.Spider):
    name = 'oscar'
    
    def start_requests(self):
        yield scrapy.Request(
            "https://www.scrapethissite.com/pages/ajax-javascript/",
            meta={
                "playwright": True,
                "playwright_include_page": True,
                "playwright_page_coroutines": [
                    PageCoroutine("click", "a#2015"),
                    PageCoroutine("wait_for_selector", "tr.film")
                ]
            }
        )

    async def parse(self, response):

        for row in response.css("tr.film"):
            yield {
                'title': row.css("td.film-title::text").get(),
                'awards': row.css("td.film-awards::text").get(),
            }
        


