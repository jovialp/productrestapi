const express = require('express');
const orderRoute = express.Router();

const Order = require('../model/order.model');

orderRoute.route('/').get(function (req, res) {
    Order.find(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

orderRoute.route('/').post(function (req, res) {
    let order = new Order(req.body);

    order.save().then(obj => {
        res.status(200).json({ message: 'Product added successfully' });
    }).catch(err => {
        res.status(400).json({ message: 'unable to save the product' });
    });
});
