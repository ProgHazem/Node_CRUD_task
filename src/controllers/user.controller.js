const UserService = require('../services/user.services')

exports.GetUsers = async function (req, res, next) {
    const page = req.params.page ? req.params.page : 1;
    const limit = req.params.limit ? req.params.limit : 10;
    try {
        const users = await UserService.getUsers({}, page, limit)
        res.render('users/index', { users: users, title: "view Table Of users" })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.CreateForm = async function (req, res, next) {
    res.render('users/create', {title: 'Create User'})
}

exports.CreateUser = async function (req, res, next) {
    try {
        await UserService.createUser(req.body)
        return res.redirect("/")
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.EditForm = async function (req, res, next) {
    try {
        const user = await UserService.getUser(req.params)
        res.render('users/edit', {title: 'Edit User', user: user})
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.UpdateUser = async function (req, res, next) {
    try {
        await UserService.updateUser(req.params, req.body)
        return res.redirect("/")
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
exports.DeleteUser = async function (req, res, next) {
    try {
        await UserService.deleteUser(req.params)
        return res.redirect("/")
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}
