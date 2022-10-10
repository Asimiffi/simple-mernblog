const express = require('express');
const app = express();
const mongoose = require('mongoose');
const BlogRoute = require('./Routes/blogRouter')
const cors = require('cors');

app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://asim:cricket@cluster0.tsio6.mongodb.net/merntutorial?retryWrites=true&w=majority');

app.use('/api/blog',BlogRoute)

app.listen(3001, ()=>{
    console.log('server running pat')
})
