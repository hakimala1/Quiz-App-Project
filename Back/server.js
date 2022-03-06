const express = require('express')
const connectDb = require('./config/connectDb')
const authRout = require('./routes/authRoute')
const profileRout=require('./routes/profileRoute')
const quizRout = require('./routes/quizRoute')
const app = express()
require('dotenv').config()

connectDb()

app.use(express.json())
app.use('/api/auth',authRout)
app.use('/api/profile',profileRout)
app.use('/api/quiz',quizRout)


app.listen(process.env.port, ()=>console.log(`port is running : ${process.env.port}`))