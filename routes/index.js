var express = require('express');
var router = express.Router();

let toDoModel = require('../models/to-do-model')

router.post('/save-todo', async function (req, res, next) {
  let newToDo = new toDoModel({
    name: req.body.name
  });
  await newToDo.save();
  res.json(true)
});

router.post('/save-task', async function (req, res, next) {
  await toDoModel.updateOne(
    {name : req.body.name},
    {$push: {tasks : req.body.task}}
  )

})

router.get('/get-todo', async function (req, res, next) {
  let toDos = await toDoModel.find()
  res.json(toDos)
});

router.delete('/delete-todo', async function (req, res, next) {
  await toDoModel.deleteOne({ name: req.body.name })
  res.json(true)
})

module.exports = router;
