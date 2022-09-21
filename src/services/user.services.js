const User = require('../models/user.model')

module.exports.getUsers = async function (query, page, limit) {

    try {
        return await User.User.find(query);
    } catch (e) {
        throw Error('Error while Paginating Users')
    }
}

module.exports.getUser = async function (params) {
    try {
        return await User.User.findById(params.id);
    } catch (e) {
        throw Error('Error while Get User')
    }
}

module.exports.createUser = async function (body) {

    try {
        return await User.User.create(body);
    } catch (e) {
        throw Error('Error while Creating')
    }
}

module.exports.updateUser = async function (params, body) {

    try {
        return await User.User.update({id: params.id }, body);
    } catch (e) {
        throw Error('Error while updating')
    }
}
module.exports.deleteUser = async function (params) {

    try {
        return await User.User.findByIdAndDelete(params.id);
    } catch (e) {
        throw Error('Error while Removing')
    }
}

