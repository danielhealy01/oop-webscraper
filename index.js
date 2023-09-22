const puppeteer = require('puppeteer')
const fs = require('fs')
const WebScraper = require('./webScraper')


const scraper = new WebScraper('https://www.bbc.co.uk', './output.json');

scraper.run()

