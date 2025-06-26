const pool = require('../db/mysql');
const UserRepository = require('../repositories/userRepository');
const UserService = require('../services/userService');

const userRepository = new UserRepository(pool);
const userService = new UserService(userRepository);

module.exports = {
    userService,
}; 