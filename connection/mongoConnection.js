const mongoose = require('mongoose')
require('dotenv').config()
const mongoURL = process.env.mongoURL

mongoose.connect(mongoURL).then(() => {
    console.log('Connections established with mongoDB was successfully.')
}).catch((error) => {
    console.log('Error connecting to mongoDB! Try again later.' +error)
})