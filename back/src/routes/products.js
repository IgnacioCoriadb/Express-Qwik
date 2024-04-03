const express = require("express");
const router = express.Router();
const productSchema = require("../models/Products");


//create product
router.post("/product", (req, res) => {
    const product =productSchema(req.body);
    product.save()
    .then((data)=> res.json(data))
    .catch((err)=> res.json({message: err}))
});

//get all products
router.get("/product", (req, res) => {
    productSchema.find()
    .then((data)=> res.json(data))
    .catch((err)=> res.json({message: err}))
});

//get by id
router.get("/product/:id", (req, res) => {
    const {id}=req.params; 
    productSchema.findById(id)
    .then((data)=> res.json(data))
    .catch((err)=> res.json({message: err}))
});

//update by id
router.put("/product/:id", (req, res) => {
    const {id}=req.params; 
    const {name} = req.body;
    productSchema.updateOne({_id:id},{$set:{name}})
    .then((data)=> res.json(data))
    .catch((err)=> res.json({message: err}))
});

//delete by id 
router.delete("/product/:id", (req, res) => {
    const {id}=req.params; 
    productSchema.deleteOne({_id:id})
    .then((data)=> res.json(data))
    .catch((err)=> res.json({message: err}))
});


module.exports =router;
