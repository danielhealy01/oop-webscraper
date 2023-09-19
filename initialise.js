async function initialiseFunction() {
	await new Promise((resolve, reject) => {
		setTimeout(() => resolve(), 2000);
	});
	console.log('resolved');
}

module.exports = initialiseFunction
