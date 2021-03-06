const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//Auth middleware
const auth = require('../../middleware/auth');

//Room model
const Room = require('../../models/Room');
//User model
const User = require('../../models/User');

const rooms = require('../../Rooms');

//@route Get /api/rooms
//@desc Get all rooms
//@access Public
router.get('/', async (req, res) => {
    try {
        const rooms = Room.find().sort({ room_id: 1 });
        res.json(rooms);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

//@route GET /api/rooms/:id
//@desc Get one room
//@access Public
router.get('/:id', async (req, res) => {
    try {
        const room = Room.findById(req.params.id);

        if(!room) {
            return res.status(404).json({ msg: 'Room not found!' });
        }

        res.json(room);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Room not found' });
        }
        res.status(500).send('Server Error');
    }
});

//@route POST /api/rooms
//@desc Create a room
//@access Private
router.post('/', [auth, [
    check('room_id', 'A valid room id is required').not().isEmpty(),
    check('name', 'A room name is required').not().isEmpty(),
    check('desc', 'A room description is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const newRoom = {
            room_id: req.body.room_id,
            name: req.body.name,
            desc: req.body.desc
        }

        const room = await newRoom.save();

        res.json(room);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route POST /api/rooms/choices/:id
//@desc Add choices to a room
//@access Private
router.post('/choices/:id', [ auth, [
    check('choiceText', 'Choice text is a required field').not().isEmpty(),
    check('nextRoom', 'The next room must be entered').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const room = await Room.findById(req.params.id);

        const newChoice = {
            choiceText: req.body.choiceText,
            nextRoom: req.body.nextRoom
        }

        room.choices.unshift(newChoice);

        await room.save();

        res.json(room.choices);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})


//@route PUT 'api/rooms/:id'
//@desc Update a room
//@access Private
router.put('/:id', async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);

        if(!room) {
            return res.status(404).json({ msg: 'Room not found' });
        }

        const updRoom = {
            room_id: updRoom.body.id ? req.body.room_id : room_id,
            name: updRoom.body.name ? req.body.name : name,
            desc: updRoom.body.desc ? req.body.desc: desc,
        }

        await updRoom.save();
        res.json(updRoom);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Room not found' });
        }
        res.status(500).send('Server Error');
    }
});

//@route DELETE /api/rooms/:id
//@desc Delete a room
//@access Private
router.delete('/:id', auth, async (req, res) => {
    try {
        const room = Room.findById(req.params.id);

        if(!room) {
            return res.status(404).json({ msg: 'Room not found!' });
        }
    
        //Check for user
        if(room.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User is not authorized!' });
        }
    
        await room.remove();
    
        res.json({ msg: 'Room removed' });
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Room not found' });
        }
        res.status(500).send('Server Error');
    }
});

module.exports = router;