const mongoose = require('mongoose')
// const Schema = mongoose.Schema;


const ToDosSchema = new mongoose.Schema({
    // id: {type: String},
    todo : {type: String},
    check : {type: Boolean}
    })
const ToDos = mongoose.model('test', ToDosSchema, 'ToDos')

module.exports = ToDos