const express = require('express');
const proRoute = express.Router();

const Pro = require('../model/product.model');

proRoute.route('/').get(function (req, res) {
    Pro.find(function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.json(data);
        }
    });
});

proRoute.route('/').post(function (req, res) {
    let pro = new Pro(req.body);

    pro.save().then(obj => {
        res.status(200).json({ message: 'Product added successfully' });
    }).catch(err => {
        res.status(400).json({ message: 'unable to save the product' });
    });
});

proRoute.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Pro.findById({ _id: id }, function (err, data) {
        res.json(data);
    });
});

proRoute.route('/:id').patch(function (req, res) {
    let id = req.params.id;
    Pro.findById({ _id: id }, function (err, data) {
        if (!data) {
            res.status(400).json({ message: 'no data found' });
        } else {
            data.title = req.body.title;
            data.image = req.body.image;
            data.price = req.body.price;
            data.gst = req.body.gst;
            data.description = req.body.description;

            data.save().then(obj => {
                res.status(200).json({ message: 'Updated successfully' });
            }).catch(err => {
                res.status(400).json({ message: 'Unable to upadate' });
            });
        }
    });
});

proRoute.route('/:id').delete(function (req, res) {
    let id = req.params.id;

    Pro.findByIdAndDelete({ _id: id }, function (err, data) {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({ message: 'Successfully Deleted' });
        }
    });
});

module.exports = proRoute;