const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
      title: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 100,
    },
    description: {
        type: String,
        trim: true,
        minlength: 1,
        maxlength: 250,
    },
    category: {
        type: String,
        minlength: 0,
        maxlength: 100,
    },
    date: {
        type: Date,
        default: new Date()
    },
    isVirtual: {
        type: Boolean,
    },
    address: {
        type: String,
        minlength: 0,
        maxlength: 250,
        default: false,
    },
});

const Event = mongoose.model("Event", eventSchema);

exports.eventSchema = this.eventSchema;
exports.Event = Event;
