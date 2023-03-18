const express = require('express');
const router = express.Router();

const { authGuard } = require('../middlewares/authMiddlewares');
const sdgController = require('../controllers/sdgControllers');

router.post('/', sdgController.saveSDG);

module.exports = router;
