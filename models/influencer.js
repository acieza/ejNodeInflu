const mongoose = require('mongoose');

const influencerSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required: true
    },
    apellido:{
        type:String,
        required: true
    },
    alias:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
             post:[{
                imagen:{type: String,required: true },
                likes: {type: Number,required: true},
            comentario:[{
                usuario: {type: String, required: true},
                mensaje: {type: String, required: true}
            }]
        }]
})

module.exports = mongoose.model('Influencer', influencerSchema);