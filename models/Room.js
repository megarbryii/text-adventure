const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create room schema
const RoomSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    choice: [ { choiceText: String, nextRoom: Number } ]
});

module.exports = Room = mongoose.model('room', RoomSchema);