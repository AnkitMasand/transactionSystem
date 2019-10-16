const transController = require('../controllers');

module.exports = function(app) { 
	app.put('/transactionservice/transaction/:id', (req, res) => {

		let ans = transController.putData(req);

		res.send(ans);
	});

	app.get('/transactionservice/sum/:id', (req, res) => {

		let ans = transController.getSum(req);
		console.log('??',ans);

		res.send(ans);
	});
}