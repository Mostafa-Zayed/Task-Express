// get Mongoose
const mongoose = require('mongoose');

// get Todo Schema
const {TodoSchema} = require('../schema/Todo');

// // make instance from Todo Schema
const todoSchemObject = new TodoSchema();

// // make Todo Model
const Todo = mongoose.model('todos', new mongoose.Schema(todoSchemObject));

// // export Todo Model
module.exports = {Todo}
