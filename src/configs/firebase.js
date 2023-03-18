const fs = require('firebase-admin');
const firebaseKey = {
	type: 'service_account',
	project_id: 'hidden-howl-324513',
	private_key_id: '68de232f6684834470e76163137901048e25252b',
	private_key:
		'-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDBYGzCKZSchwyT\nvOrOdwDjekvgQFrpXqaFpCpI+ct8W1QD0rVNt6HVoOy3ytIGwVov0pzBA9zaU/Cq\nuzPu+bc02hpUv7yokIcqItIZGkAd4WbrShKyLCv4/8Z/Vy8hz0zndiBnEVnIEuzO\nHKJve0Yhsbumy1fBF9VABjTCS6iuF44fra0jBBfpw6Z0FIUufvcCF88r5Hq1fzW+\nqsusmg8iXYD3pRxVX814/nUDsubwbLLdCgp/6YisyBXO0XPhHaTa69+OFxcWWw2u\nxV8jO/k6lC1CWwjZkhZ18jwEhkbKi4EK34S0svkfaMt/iL9xjIbivKmYXxQBhPR3\nILZ59C5pAgMBAAECggEARwPFvQIvINKZpFG++0aJrYBWiAqqOES5q59vpfASMd+K\nOYMycNGMnZrlA9P4kGGGYMScK2fjPcyQt+patpq/FKo5/ECTpGW7NZanCG/y9uY1\neRfxSLxfA6jOuSoH1Yc/C0t+t8sP6SFGFKVAY+dmCG6wZp8LYY6CkmoVCvtk/VVm\nwMNl7ajjsNJMgDLIbh88ptBocxNPOtEVyh6lvYvEriwf7lw3chBfqlwYj7/5Wzh3\nY2nNQ9lxYu/wFXQP+4VAs80DTI2oX9xF5+2IQFZEY21ZtSRAXEZ+ELVQMXtGXcZB\nTp0z7JEMMSpWiDtdSHd5/NObJf9MomO0T3nLog4O7wKBgQDfsDTHXnsBeEO8Cm4W\nkOqZfoGKAmpg96uL7OkpIX3O+zEDHdz6zy0NVf/rGs2iosUySWAYJZHZmjsiJFpP\nn/+Isc4voKTKDGn43fjV7nB9VqY6qD33Tl2I0H+4mo6P89qcfDFgQiF3o2Hr0rVC\neoaqzpPO5PvH1mcyEiwEFhCqIwKBgQDdT1IxlJ5ukQxi8Wzb+88KPmDa28cujQxz\nq7mw1k6Ijtou7naeR5j6WAViYUFeiskc/Hc6kG750XSeui388KdGGycnIgTjAvJN\nPHLoprQg6YLgbzy77wA3hLQQOFj3t4uYG2o8qMNPRCAFsKrGnDrqkW7UFAixOecu\nGEj3IGAQAwKBgQCHc4byNycbI704b8RsC8LTwcQlUwMhxrftWj9yNaKeJINwVLQM\neEnaqnn23tsooZHxunbjCFUCRJ+MNCEv2D3/g1PMiWVgKBY/qgJVYTZi34Z3PIuR\nZrXC9CZzHbw4NTzqx1WK6WCktp3EFGrIX7OOWNsuTICeaRlCO7jFnKroqwKBgQC/\nAziJDKJWAiFzwLbZhBRl3gMQw0K+XgVSTPSfucjcupd8jFubL2bNJG25RQH7zMPa\nndl2lbUDMBJ88WrB9yAZNVRsxUL8gM2LdlIjlcbA5WsNtVTxTE6enI4htdCsNiJp\nLbhbFLpGTyFoZ9xuQefkD5RdvdDmznhHY7SOf8YJ6wKBgQCjlBkeUrWWBOyS1l26\nXWBtopD1YwNQg/0QxGGrdYVdgumhwaOh+6gTEOJU4F3un8qKrYCd83imjplsGJxk\ngjH7/I3zZbF7oVUK5tYiXTaxIc//+EMAJTztD5zVdnpSJr/Uc5X3Y92rlX0qJeQA\n6IBipeqIHD3BOr2YyWRpECdtRg==\n-----END PRIVATE KEY-----\n',
	client_email: 'sdg-629@hidden-howl-324513.iam.gserviceaccount.com',
	client_id: '106432874616416347839',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/sdg-629%40hidden-howl-324513.iam.gserviceaccount.com',
};

fs.initializeApp({
	credential: fs.credential.cert(firebaseKey),
});

const db = fs.firestore();
module.exports = db;
