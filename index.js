// get express function 
const express = require('express');

// get Path module
const path = require('path');

// get mongoose 
const {connectDb} = require('./config/database');

// make connection to mongodb
connectDb();

// boot express app
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// register assets Files css && js && bootstrap
app.use(express.static(path.join(__dirname,'public')));

// get todos routes 
const todosRouts = require('./routes/todos/todos');

// // register backend todos routes
app.use('/todos',todosRouts);

// 404 page
app.use((request,response) => {
    response.status(404).sendFile(path.join(__dirname,'views','frontend','404.html'));
})


// app port 5000
app.listen(5000);