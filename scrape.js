async function scrapeFunction() {
	try {
		await new Promise((resolve, reject) => {
			setTimeout(() => resolve(), 2000);
		});
		console.log('resolved');
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}

module.exports = scrapeFunction;
