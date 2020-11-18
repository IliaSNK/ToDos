const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3001


const todos = require('./routes/router')

const options = {
    useNewUrlParser: true,
    useFindAndModify: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
}

const app = express()
app.use(todos)
async function start() {
    try {
        await mongoose.connect(url, options).then (function() {
            console.log ('Mongo has bin started')
        }).catch( function(err) {
            console.log(err)
        })
        app.listen(PORT, () => {
            console.log("Server has bin started");
        })

    } catch (error) {
        console.log(error);
    }
}


start()