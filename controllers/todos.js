const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            const todoItems = await Todo.find({userId:req.user.id}) //finds all Todos in the database tied to that user
            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false}) //counts the items that have completed value as false
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user}) //renders todoItems in todos.ejs
        }catch(err){
            console.log(err)
        }
    },
    createTodo: async (req, res)=>{
        try{
        //edited Todo.create to include new inputs
            await Todo.create({todo: req.body.todoItem, todoDeadline: req.body.deadline, todoPriority: req.body.highPriority, completed: false, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    