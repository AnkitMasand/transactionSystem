const transactionRoutes = require('./transactionRoutes');

module.exports = function(app) {  
	transactionRoutes(app);
};
