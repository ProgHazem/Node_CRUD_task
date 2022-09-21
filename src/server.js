const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
// const UserRoutes = require('src/routes/user.route')
const Users = require('./controllers/user.controller')
const app = express()

const bodyParser = require('body-parser')
mongoose.connect('mongodb+srv://hazem:RxTaz901f3UDYo8b@cluster0.fhpqxow.mongodb.net/?retryWrites=true&w=majority');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'));
// app.use('/users', UserRoutes);
// const router = app.Router()

app.get('/', Users.GetUsers)
app.get('/createForm', Users.CreateForm)
app.post('/create', Users.CreateUser)
app.get('/edit/:id', Users.EditForm)
app.post('/update/:id', Users.UpdateUser)
app.get('/delete/:id', Users.DeleteUser)

module.exports = app;
