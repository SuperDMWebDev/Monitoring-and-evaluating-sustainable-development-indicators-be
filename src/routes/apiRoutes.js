var express = require('express');
var router = express.Router();
const { resolve } = require('path');

router.get('/', function (req, res) {
    var dataPath = './data/data' + req.query.id + ".json";
    var data = require(resolve(dataPath));
    res.send(JSON.stringify(data));
});


module.exports = router;