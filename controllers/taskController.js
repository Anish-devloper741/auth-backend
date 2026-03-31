let Task = require("../models/tasks");


let getTasks = async (req,res)=>{
    let data = Task.find();
    res.json(data);
}

let createTask = async (req,res)=>{
    let{title,discription}=req.body;

    let task = Task.create({
        title,
        discription
    })

    res.json(task);
}

let updateTask = async (req,res)=>{
    let{title,discription}=req.body;
    let update = Task.findById({
        title,
        discription
    })

    res.json(update);
}

let deleteTask = async (req,res)=>{
    let deleted = Task.findById();
    res.json(deleted);
}

module.exports = {getTasks,createTask,updateTask,deleteTask};