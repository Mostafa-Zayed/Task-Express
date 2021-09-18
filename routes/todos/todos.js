// get express function
const express = require('express');

// get make router 
const router = express.Router();

// get path module
const path = require('path');

// // get helper path
const rootDir = require('../../helpers/path');

// // get Todo Model 
const {Todo} = require('../../models/Todo');


// get all todos
router.get('/', async (request,response) => {
    const todos = await Todo.find();
    response.status(200).json(todos);
});

// add new Todo
router.post('/add-todo', async (request,response) => {
    
    const todo = new Todo({
        title: request.body.title,
        completed: request.body.completed,
        createdBy: {
            id: request.body.createdBy.id,
            name: request.body.createdBy.name
        }
    });
    await todo.save();
    response.status(200).json({
        "message": "Your Task Added Succ"
    });
});

// // update todo
router.put('/update/:id', async(request,response) => {
    const {id} = request.params;
    const todo = await Todo.findByIdAndUpdate(id,
        {
            title: request.body.title,
            completed: request.body.completed,
            createdBy: {
                id: request.body.createdBy.id,
                name: request.body.createdBy.name
            }
        }
    );
    if (!todo) {
        return response.status(404).json({
            "message": "Todo Not Found"
        });
    }
    response.status(200).json({
        "message": "Todo Updated Succefulley",
        "todo": request.body
    });
});

// get one Todo
router.get('/:id', async(request,response) =>{
    const {id} = request.params;
    const todo = await Todo.findById(id);
    if (!todo) {
        return response.status(404).json({"message": "Todo Not Found"});
    }
    response.status(200).json(todo);
});

// delete todo
router.delete('/delete/:id', async(request,response) => {
    
    const todo = await Todo.findByIdAndDelete(request.params.id);
    if (!todo) {
        return response.status(404).json({"message": "Todo Not Found"});
    }
    return response.status(200).json({"message": "Todo Deleted Succfulley"});
});
module.exports = router;

