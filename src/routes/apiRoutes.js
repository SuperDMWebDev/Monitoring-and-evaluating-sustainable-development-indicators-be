const express = require('express');
const router = express.Router();
const { resolve } = require('path');
const db = require( resolve('./src/configs/firebase'));

router.get('/test', async function (req, res) {
	try {
		const allEntries = [];
		const querySnapshot = await db.collection('energy').get();
		querySnapshot.forEach((doc) => allEntries.push(doc.data()));
		return res.status(200).json(allEntries);
	} catch (error) {
		return res.status(500).json(error.message);
	}
});

router.get('/', async function (req, res) {
	try {
		const querySnapshot = await db.collection('energy')
			.where("id", "==", Number(req.query.id))
			.get();
		
		querySnapshot.forEach((doc) => {
			let data = doc.data();
			console.log(data);
			res.send(JSON.stringify(data));
			return;
		})
	} catch (error) {
		return res.status(500).json(error.message);
	}
});
router.get('/title', async function (req, res) {
	try {
		const querySnapshot = await db.collection('energy')
			.where("id", "==", "title")
			.get();
		querySnapshot.forEach((doc) => {
			let data = doc.data();
			console.log(data);
			res.send(JSON.stringify(data.body));
			return;
		})
	} catch (error) {
		return res.status(500).json(error.message);
	}
});

module.exports = router;
