const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


const app = express();
// mongoose.connect('mongodb://user@pass')
mongoose.connect('mongodb://192.168.99.1:1111/nodeapi', {
    useNewUrlParser: true 
});

requireDir('./src/models');



app.use('/api', require('./src/routes'));

app.listen(3001);

