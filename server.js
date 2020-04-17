const express = require('express');
const path = require('path');

const app = express();

//Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Static foler
app.use(express.static(path.join(__dirname, 'client', 'public')));

//Rooms API routes
app.use('/api/rooms', require('./routes/api/rooms'));

const port = process.env.PORT || 5000;

app.listen(port);
console.log(`Server started on port ${port}`);