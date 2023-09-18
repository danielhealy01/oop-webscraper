// const puppeteer = require('puppeteer');
// const fs = require('fs');

class WebScraper {
	constructor() {
		this.url = '';
		this.outputFile = '';
	}

	async initialise() {
		await new Promise((resolve, reject) => {
			setTimeout(() => resolve(), 2000);
		});
		console.log('resolved');
	}

	async scrape() {
		try {
			await new Promise((resolve, reject) => {
				setTimeout(() => resolve(), 2000);
			});
			console.log('resolved');
		} catch (err) {
			console.log(`Error: ${err}`);
		}
	}

	async run() {
		await this.initialise();
		await this.scrape();
	}
}

module.exports = { WebScraper };

// TDD
// Commander.js with argv
