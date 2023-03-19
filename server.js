const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const configs = require('./src/constants/configConstants');
const authRoutes = require('./src/routes/authRoutes');
const accountRoutes = require('./src/routes/accountRoutes');
const sdgRoutes = require('./src/routes/sdgRoutes');
const urls = require('./src/constants/urlConstants');
const db = require('./src/configs/firebase');
const routes = require('./src/routes/routes');
const apiRoutes = require('./src/routes/apiRoutes');

const PORT = process.env.APP_PORT || 3001;
const rootUrl = urls.ROOT_API_URL;

// custom middleware logger
app.use(logger);

// Cross Origin Resource Sharing
const whitelist = ['http://localhost:3001', 'http://localhost:5000'];
const corsOptions = {
	origin: (origin, callback) => {
		if (whitelist.indexOf(origin) !== -1 || !origin) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

app.use(`${rootUrl}${urls.AUTH_PREFIX_API_URL}`, authRoutes);
app.use(`${rootUrl}${urls.ACCOUNT_PREFIX_API_URL}`, accountRoutes);
app.use(`${rootUrl}${urls.SDG_PREFIX_API_URL}`, sdgRoutes);

app.use('/', routes);
app.use(`${rootUrl}${urls.REPORT_PREFIX_API_URL}`, apiRoutes);
console.log(`${rootUrl}${urls.REPORT_PREFIX_API_URL}`);

app.use(errorHandler);

app.listen(configs.APP_PORT, () => {
	console.log(`Server is serving on port ${configs.APP_PORT}`);
});
