const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const url = 'mongodb://localhost:27017/Influencer';

const app = express();

mongoose.connect(url, { useNewUrlParser: true})
const conexion = mongoose.connection;

conexion.on('open', () => {
    console.log('***** Conectado a la Base de Datos ******');
});

app.use(cors());
app.use(express.json());

const influRouter = require('./routes/influencers');
//const { Router } = require('express');

app.use('/influencers', influRouter);

app.listen(3000, () =>{
    console.log('***** Servidor Conectado *****');
})