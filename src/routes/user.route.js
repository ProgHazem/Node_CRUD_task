const express = require('express')
const Users = require('../controllers/user.controller')
// const { GetUsers, CreateUser, CreateForm, DeleteUser, UpdateUser, EditForm } = require('src/controllers/user.controller')
const router = express.Router()

router.get('/', Users.GetUsers)
router.get('/createForm', Users.CreateForm)
router.post('/create', Users.CreateUser)
router.post('/edit/:id', Users.EditForm)
router.put('/update/:id', Users.UpdateUser)
router.delete('/delete/:id', Users.DeleteUser)

module.exports = router;
