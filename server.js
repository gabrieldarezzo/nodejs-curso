const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send('Hello for 4body : - )');
});


app.listen(3001);