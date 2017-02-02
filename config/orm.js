var connection = require('./connection.js');


var queries = {
	all: function(callback) {
		connection.query('SELECT * FROM burgers', function(err,result){
			if (err) {
        		throw err;
      		}
      		callback(result);
    	});
	},

	insertOne: function(callback) {
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.name]);
	},

	updateOne: function(connection, author, quote, id, callback){
		connection.query('UPDATE burgers SET ?, ? WHERE id = ?', [{burger: burger}, {quote: quote}, id]);
	}

}

module.exports = queries;