const pool = require('../db/mysql');
const UserRepository = require('../repositories/userRepository');
const UserService = require('../services/userService');
const UserHandler = require('../handlers/userHandler');
const UserRouter = require('../routes/userRouter');

const userRepository = new UserRepository(pool);
const userService = new UserService(userRepository);
const userHandler = new UserHandler(userService);
const userRouterInstance = new UserRouter(userHandler);
const userRouter = userRouterInstance.getRouter();

module.exports = {
    userRouter,
}; 