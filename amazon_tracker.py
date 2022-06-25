# -*- coding: utf-8 -*-
import scrapy
import json
from datetime import date


class AmazonTrackerSpider(scrapy.Spider):
    name = 'amazon_tracker'
    
    def __init__(self, query="python for beginners", *arg, **kwargs):
        super().__init__(*arg, **kwargs)

        self.base_url = "https://www.amazon.com"
        self.search_url = "https://www.amazon.com/s?k={query}"

        self.rank = None
        self.page_num = 1
        self.query = query

        self.start_urls = [
            self.search_url.format(
                query=query.replace(" ", "+")
            )
        ]

    def parse(self, response):
        title = "Python 3.10: A Complete Guide Book To Python Programming For Beginners"
        
        search_results = response.css("div.s-result-item h2 > a > span::text").getall()

        if title in search_results:
            page_pos = search_results.index(title) + 1
            self.rank = (self.page_num - 1) * 48 + page_pos
        else:
            next_page_button = response.css("a.s-pagination-next")

            if next_page_button:
                yield scrapy.Request(
                    self.base_url + next_page_button.attrib["href"]
                )
            else:
                self.rank = "Not found!"

        self.export()


    def export(self):
        today = date.today().strftime("%d-%m-%Y")
        with open("amazon_track.json") as file:
            dt = json.load(file)

        if self.query in dt:
            dt[self.query][today] = self.rank
        else:
            dt[self.query] = {
                today: self.rank
            }

        with open("amazon_track.json", "w"):
            json.dump(dt, file)






