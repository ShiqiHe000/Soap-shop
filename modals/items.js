const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true, 
        unique: true
    }, 
    number: {
        type: Number, 
        required: true
    }, 
    price: {
        type: String, 
        required: true
    }, 
    date: {
        type: Date, 
        default: Date.now
    }
})

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;