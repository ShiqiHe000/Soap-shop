const express = require('express');
const router = express.Router();

const Item = require('../modals/items');

// GET Get all the items
// /items
router.get('/', async (req, res) => {
    try{
        const items = await Item.find();
        res.json(items);
    } catch (err){
        console.log(err);

    }

})

// POST post a new item
// /items
router.post('/', async (req, res) => {
    try{
        const newItem = new Item({
            name: req.body.name, 
            price: req.body.price, 
            number: req.body.number,
        })
        const response = await newItem.save();
        res.json(response);
    } catch (err){
        console.log(err);
        res.status(405).json({message: 'Failed to add new item.'})
    }

})

// PUT update an item
// /items/:id
router.put('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const response = await Item.updateOne({_id: id}, {
            name: req.body.name, 
            number: req.body.number, 
            price: req.body.price
        })

        res.send('Update success!');
    } catch (err){
        console.log(err);
        res.status(404).json({message: "item not found"});
    }
})

// DELETE delete an item
// /items/:id
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    
    try{

        const response = await Item.findByIdAndDelete(id);
 
        res.json(response);

    } catch (err) {
        res.status(404).json({message: 'Cannot find this item.'});
    }

})




module.exports = router;
