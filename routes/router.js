const {Router} = require('express')
const ToDos = require('../model')
const router = Router()

const cors = require('cors')



router.get('/api/getToDos',cors() ,(req, res) => {
    ToDos.find({}, (error, todos) =>{
        for (let i = 0; i < todos.length; i++){
            console.log(todos[i].todo);
        }
        res.send(todos)          
    })    
})

router.get('/api/addToDo', (req, res) => {
    res.send('ok')
    ToDos.create({todo: req.query.todo, check : req.query.check}, (err, doc) =>{
        if(err) return console.log(err);
    console.log("Сохранен объект user", doc);
    })
})

router.get('/api/delToDo', (req, res) =>{
    res.send('ok')
    ToDos.findOneAndDelete( {_id: req.query.id}, (error, el) => {
        console.log(el)
    })
})

router.get('/api/updateToDo', (req, res) =>{
    res.send('ok')
    ToDos.findOneAndUpdate( {_id: req.query.id},{todo: req.query.todo},{check: req.query.check}, (error, el) => {
        console.log(el)
    })
})

module.exports = router