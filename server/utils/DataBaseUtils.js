import mongoose from "mongoose";

import config from '../etc/config.json';

import '../models/User';

const User = mongoose.model('User');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listUsers() {
    return User.find();
}

export function createUser(data) {
    const user = new User({
        username: data.username,
        password: data.password
    });

    return user.save();
}

export function deleteUser(id) {
    return User.findById(id).remove();
}


