//db schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//declaring collections chema property and names

let Product = new Schema(
    {
        //schema properties
        title: { type: String },
        image: { type: String },
        price: { type: Number },
        gst: { type: Number },
        description: { type: String }
    },
    {
        collection: 'product'
    }
);
module.exports = mongoose.model('Prod', Product);