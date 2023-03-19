var path = require("path")
var fadmin = require("firebase-admin");

var serviceAccount = require(path.resolve(".\\src\\configs\\serviceAccountKey.json"));

fadmin.initializeApp({
	credential: fadmin.credential.cert(serviceAccount),
	databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});

const db = fadmin.firestore();
module.exports = db;
