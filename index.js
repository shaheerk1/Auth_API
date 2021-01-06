const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')

//import route
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')

dotenv.config()

//connect DB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }, () =>
  console.log('connected to Database')
)

//Middleware
app.use(express.json())

//Router Middlewares
app.use('/api/user', authRoute)
app.use('/api/posts', postRoute)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server running in port ${port}`))
