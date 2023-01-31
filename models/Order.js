const {Schema, model} = require('mongoose')

const Order = new Schema({
    userId: {type: Number, required: true},
    settings: {type: String, required: true},
    price: {type: Number, required: true},
    date: {type: Date, default: Date.now},
    status: {type: String, required: true}
})

module.exports = model('Order', Order)