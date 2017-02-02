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

	create: function(callback) {
		connection.query('INSERT INTO burgers (burger_name) VALUES (?)', [req.body.name],function(err,result){
			if (err) {
        		throw err;
      		}
      		callback(result);
    	});
	},

	updateOne: function(connection, burger_name, devoured, id, callback){
		connection.query('UPDATE burgers SET ?, ? WHERE id = ?', [{burger: burger}, {devoured: devoured}, id]);
	}

}

module.exports = queries;