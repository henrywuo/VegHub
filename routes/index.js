var express = require('express');
var router = express.Router();

const db = {
    'stuffed avocados' : { name: 'Stuffed Avocados', pic: 'pics/stuffed-avocado.jpg'},
    'shrimp tacos' : { name: 'Shrimp Tacos', pic: 'pics/shrimp-tacos.jpg'},
    'salad' : { name: 'Mysterious Vegan Salad', pic: 'pics/salad.png'}
}

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/food', (req, res) => {
    res.send(db);
});

router.get('/food/:foodid', (req, res) => {
    const food = req.params.foodid;
    const val = db[food];
    if (val) {
        res.send(val);
    } else {
        res.send({});
    }
});


module.exports = {
    router: router
}