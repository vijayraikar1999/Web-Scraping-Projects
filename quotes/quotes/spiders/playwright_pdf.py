import scrapy
from scrapy.selector import Selector
from scrapy_playwright.page import PageCoroutine

class OscarSpider(scrapy.Spider):
    name = 'playwright_pdf'
    
    def start_requests(self):
        yield scrapy.Request(
            "https://docs.scrapy.org/en/latest/topics/asyncio.html",
            meta={
                "playwright": True,
                "playwright_include_page": True,
            }
        )

    async def parse(self, response):
        page = response.meta["playwright_page"]
        await page.pdf(path="asyncio.pdf")        
        await page.close()





