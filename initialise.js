const puppeteer = require('puppeteer');

async function initialiseFunction() {
    this.browser = await puppeteer.launch(
        { headless: 'new' }
        // stops warning of deprecated headless mode
    );
    this.page = await this.browser.newPage();
    await this.browser.close();
    console.log('initialise resolved')
    // closed just to stop hanging.
}

module.exports = initialiseFunction;
