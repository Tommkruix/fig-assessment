const express = require('express');
const event = require('./events');
const home = require('./home');

const router = express.Router();

router.use('/events', event);
router.use('/', home);

module.exports = router;