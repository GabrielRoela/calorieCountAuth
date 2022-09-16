const Counter = require('../models/Counter')

module.exports = {
    getCounter: async (req,res)=>{
        console.log(req.user)
        try{
            const counter = await Counter.find({userId:req.user.id})
            const total = counter.reduce((pv, cv) => +cv.calories + +pv, 0)
            res.render('calories.ejs', {counter: counter, total: total, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createEntry: async (req, res)=>{
        try{
            await Counter.create({name: req.body.name, calories: req.body.calories, userId: req.user.id})
            console.log('Meal has been added!')
            res.redirect('/counter')
        }catch(err){
            console.log(err)
        }
    },

    reset: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Counter.deleteMany({userId: req.user.id})
            console.log('Deleted Todo')
            res.redirect('/counter')
        }catch(err){
            console.log(err)
        }
    }
}    