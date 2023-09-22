async function scrapeFunction(url) {
	try {
		await new Promise((resolve, reject) => {
			setTimeout(() => resolve(), 2000);
		});
		console.log(`url: ${url}`);
		await this.page.goto(url, { waitUntil: 'domcontentloaded' });
		const scrapedData = await this.page.evaluate(() => {
			const data = {}; // Create an object to store scraped data

			// Example: Scraping the title and some other data
			data.title = document.title;
			// data.someOtherData = document.querySelector('#some-element').textContent;
			return data;
		});
        console.log(`scrape resolved ${scrapedData.title}`);
        await this.browser.close();
        return scrapedData
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}

module.exports = scrapeFunction;
