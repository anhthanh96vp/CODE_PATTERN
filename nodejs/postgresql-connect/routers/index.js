var express = require('express');
var router = express.Router();

import { sequelize, Op } from "../sequelize";

router.use("/users", require(__dirname + "/users"))

//Test DB connection
sequelize
	.authenticate()
	.then(() => {
		console.log("Connection has been established successfully.");
	})
	.catch(err => {
		console.error("Unable to connect to the database:", err);
	});



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
