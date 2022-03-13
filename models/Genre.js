const mongoose = require('mongoose')

const genreSchema = new mongoose.Schema({
    name : { type : String, required: true, unique: true },
    movies: {type: mongoose.Schema.Types.ObjectId}
}, {timestamps: true})

const Genres = new mongoose.model('genres', genreSchema)

module.exports = Genres