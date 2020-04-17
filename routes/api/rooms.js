const express = require('express');
const router = express.Router();

const rooms = require('../../Rooms');

//Get all rooms
router.get('/', (req, res) => {
    res.json(rooms);
})

//Get a single room
router.get('/:id', (req, res) => {
    const found = rooms.some(room => room.id === parseInt(req.params.id));

    if(found) {
        res.json(rooms.filter(room => room.id === parseInt(req.params.id)));
    } else {
        res.status(400).json({msg: `No room with the id of ${req.params.id}`});
    }
});

//Create a room
router.post('/', (req, res) => {
    const newRoom = {
        id: req.body.id,
        name: req.body.name,
        desc: req.body.desc
    }

    if(!newRoom.id || !newRoom.name || !newRoom.desc) {
        return res.status(400).json({ msg: 'Please enter an id, name, or description'});
    }

    rooms.push(newRoom);
    res.json(rooms);
});

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

//Deleting a room
router.delete('/:id', (req, res) => {
    const found = rooms.some(room => room.id === parseInt(req.params.id));

    if(found) {
        res.json({msg: 'Room deleted', rooms: rooms.filter(room => room.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg: `No room with the id of ${req.params.id}`});
    }
});

module.exports = router;