const Event = require('../models/event');
const mongoose = require('mongoose');

const getEvents = () => mongoose.model('Event').find();

exports.getEvents = getEvents