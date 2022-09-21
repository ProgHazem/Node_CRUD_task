const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const UserRoutes = require('./routes/user.route')
const app = express()

const bodyParser = require('body-parser')
mongoose.connect('mongodb+srv://hazem:RxTaz901f3UDYo8b@cluster0.fhpqxow.mongodb.net/?retryWrites=true&w=majority');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static('public'));
app.use('/', UserRoutes);

module.exports = app;
