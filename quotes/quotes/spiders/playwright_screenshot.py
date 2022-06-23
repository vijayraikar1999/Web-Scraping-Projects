import scrapy
from scrapy.selector import Selector
from scrapy_playwright.page import PageCoroutine

class OscarSpider(scrapy.Spider):
    name = 'playwright_screenshot'
    
    def start_requests(self):
        yield scrapy.Request(
            "https://unsplash.com/photos/VcVrNIobArk",
            meta={
                "playwright": True,
                "playwright_include_page": True,
            }
        )

    async def parse(self, response):
        page = response.meta["playwright_page"]
        await page.screenshot(path="snip.png", full_page=True)
        
        await page.close()





