const express = require('express');
const router = express.Router();
const { resolve } = require('path');

router.get('/', function (req, res) {
	var dataPath = './data/data' + req.query.id + '.json';
	var data = require(resolve(dataPath));
	res.send(JSON.stringify(data));
});
router.get('/title', function (req, res) {
	var dataPath = './data/title.json';
	var data = require(resolve(dataPath));
	res.send(JSON.stringify(data));
});

module.exports = router;
