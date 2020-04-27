const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

//Auth middleware
const auth = require('../../middleware/auth');

//Room model
const Room = require('../../models/Room');

const rooms = require('../../Rooms');

//@route Get /api/rooms
//@desc Get all rooms
//@access Public
router.get('/', (req, res) => {
    Room.find()
        .sort({ id: 1 })
        .then(rooms => res.json(rooms))
});

//@route GET /api/rooms/:id
//@desc Get one room
//@access Public
router.get('/:id', (req, res) => {
    Room.findById(req.params.id)
    .then(rooms => res.json(rooms.id))
    .catch(err => res.status(400).json({msg: `No room with the id of ${req.params.id}`}));
});

//@route POST /api/rooms
//@desc Create a room
//@access Private (currently public)
router.post('/', auth, async (req, res) => {
    const newRoom = new Room({
        id: req.body.id,
        name: req.body.name,
        desc: req.body.desc,
    });

    await newRoom.save().then(room => res.json(room));
});

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


//Update a room
router.put('/:id', (req, res) => {
    const found = rooms.some(room => room.id === parseInt(req.params.id));

    if(found) {
        const updRoom = req.body;

        rooms.forEach(room => {
            if(room.id === parseInt(req.params.id)) {
                room.id = updRoom.id ? updRoom.id : id;
                room.name = updRoom.name ? updRoom.name : name;
                room.desc = updRoom.desc ? updRoom.desc : desc;

                res.json({msg: 'Room updated', room});
            }
        })
    } else {
        res.status(400).json({msg: `No member with the id of ${req.params.id}`});
    }
});

//@route DELETE /api/rooms/:id
//@desc Delete a room
//@access Private
router.delete('/:id', auth, (req, res) => {
    Room.findById(req.params.id)
    .then(rooms => rooms.remove().then(() => res.json({sucess: true})))
    .catch(err => res.status(404).json({sucess: false}));
});

module.exports = router;