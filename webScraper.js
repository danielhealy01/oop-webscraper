// const puppeteer = require('puppeteer');
// const fs = require('fs');
const scrapeFunction = require('./scrape');
const initialiseFunction = require('./initialise');
const saveData = require('./saveData')
class WebScraper {
	constructor(url, outputFile) {
		this.url = url;
		this.outputFile = outputFile;
	}

	initialise() {
		return initialiseFunction();
	}

    async scrape() {
        const scrapedData = await scrapeFunction(this.url, this.outputFile);
		return scrapedData
    }

    async saveOutput(scrapedData) {
        await saveData(scrapedData);
    }

	async run() {
		await this.initialise();
        const scrapedData = await this.scrape();
        await this.saveOutput(scrapedData)
		console.log('All resolved');
	}
}

module.exports = WebScraper;
