let mongoose = require ('mongoose');

let toDoSchema = mongoose.Schema({
    name : String,
    tasks : Array
})

let toDoModel = mongoose.model('to-do-datas', toDoSchema);

module.exports = toDoModel