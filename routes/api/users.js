const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bycrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult} = require('express-validator');

//User model
const User = require('../../models/User');

//@route POST 'api/users
//@desc Register a user
//@desc Public
router.post('/', [
    check('email', 'Please enter a valid email address').isEmail(),
    check('password', 'Please enter a password with at least 8 or more characters').isLength({ min: 8 })
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if(user) {
            return res.status(400).json({ msg: 'User already exists!' });
        }

        user = new User({
            email,
            password
        });

        const salt = await bycrypt.getSalt(10);

        user.password = await bycrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('gameSecret'), {
            expiresIn: 3600
        },
            (err, token) => {
                if(err) throw err;
                res.json(token);
            }
        )
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;