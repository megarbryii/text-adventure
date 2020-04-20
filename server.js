const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');

const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//DB config
const db = config.get('mongoURI');

//Connect to MongoDB
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected...'))
   .catch(err => console.log(err));

//Static foler
app.use(express.static(path.join(__dirname, 'client', 'public')));

//Rooms API routes
app.use('/api/rooms', require('./routes/api/rooms'));

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`Server started on port ${port}`);