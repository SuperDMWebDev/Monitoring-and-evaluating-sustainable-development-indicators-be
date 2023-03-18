const messageConstants = require('../constants/messageConstants');
const db = require('../configs/firebase');
const saveSDG = async (request, response) => {
	console.log('go to here');
	const sdgDb = db.collection('SDG');
	const document = sdgDb.doc('solar energy');
	await document.set({
		first: 'Liam',
		last: 'Ragozzine',
		address: '133 5th St., San Francisco, CA',
		birthday: '05/13/1990',
		age: '30',
	});
};

module.exports = { saveSDG };
