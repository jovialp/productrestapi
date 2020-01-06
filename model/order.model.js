//db schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//declaring collections chema property and names

let Order = new Schema(
    {
        //schema properties
        username: { type: String },
        address: { type: String },
        mobile: { type: String },
        orderinfo: { type: Array },
        orderstatus: { type: String }
        orderdate: { type: String }
    },
    {
        collection: 'order'
    }
);
module.exports = mongoose.model('Order', Order);
