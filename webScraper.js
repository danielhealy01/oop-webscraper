// const puppeteer = require('puppeteer');
// const fs = require('fs');
const scrapeFunction = require('./scrape');
const initialiseFunction = require('./initialise')
class WebScraper {
	constructor() {
		this.url = '';
		this.outputFile = '';
	}

	initialise() {
        return initialiseFunction()
	}

	scrape() {
		return scrapeFunction();
	}

	async run() {
		await this.initialise();
        await this.scrape();
        console.log('All resolved')
	}
}

module.exports = WebScraper;


