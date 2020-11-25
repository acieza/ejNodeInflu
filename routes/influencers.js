const express = require('express');
const router = express.Router();
const Influencer = require('../models/influencer');


router.get('/', async ( req,res)=>{
    try{
        const infUno = await Influencer.find();
        res.json(infUno);
    }catch{
        res.send("Error " + err);
    }
})

router.get('/', async ( req,res)=>{
    try{
        res.send('Hola Marqués');
    }catch{
        res.send("Error " + err);
    }
})

router.post('/', async(req, res) =>{
    const influencer = new Influencer({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        alias: req.body.alias,
       // date: req.body.date,
        post: req.body.post
    })
    try{
        const inflUno = await influencer.save();
        res.json(inflUno);
    }catch(err){
        res.send("Error " + err);
    }
})
module.exports = router;