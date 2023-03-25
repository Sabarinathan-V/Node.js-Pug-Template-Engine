const express = require("express");


const homeRouter = express.Router();

homeRouter.get("/",(req,res,next)=>{
    const courses = [
        'PHP', 'JavaScript', 'React', 'Angular', 'Node.js', 'Python'
    ];
    res.render('index',{
        docTitle:"Home Page",
        text: 'Hello from Render Object',
        courseTitle:'List of Courses',
        courses
    });
});

homeRouter.get('/about',(req,res)=>{
    res.render('about')
})


module.exports = homeRouter;