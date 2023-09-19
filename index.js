const puppeteer = require('puppeteer')
const fs = require('fs')
const WebScraper = require('./webScraper')


const scraper = new WebScraper('a', 'b')

scraper.run()

