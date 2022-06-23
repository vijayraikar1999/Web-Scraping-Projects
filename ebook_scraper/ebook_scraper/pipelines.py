from openpyxl import Workbook
from itemadapter import ItemAdapter
from pymongo import MongoClient


class EbookScraperPipeline:

    def open_spider(self, spider):
        self.client = MongoClient(
            host='mongodb+srv://mongodbscrapy:mongodbscrapypassword@cluster0.odhj2tb.mongodb.net/?retryWrites=true&w=majority',
            connect=False,
        )
        self.collection = self.client.get_database('ebook').get_collection('travel')

    def process_item(self, item, spider):
        self.collection.insert_one(
           ItemAdapter(item).asdict()
        )
        return item

    def close_spider(self, spider):
        self.client.close()
