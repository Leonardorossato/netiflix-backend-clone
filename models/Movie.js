const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    commingSoon : {type : Boolean, default: false},
    title : {type : String, required: true, unique: true},
    year : {type : String},
    rated : {type : String},
    released : {type : String},
    gebre: {type : Array},
    director : {type : String},
    writter : {type : String},
    actors : {type : String},
    plot : {type :String},
    posters : {type : String},
    trailers : {type : String, default: ''},
    language : {type : String},
    coutry: {type : String},
    awards : {type : String},
    posters : {type : String},
    type : {type : String},
    totalSeasons : {type : String, default: ''},
    imagens: {type : Array}
}, {timestamps: true})

const Movie = new mongoose.model('movies', movieSchema)

module.exports = Movie