const Router = require('koa-router');

class UserRouter {
    constructor(userHandler) {
        this.router = new Router();
        this.router.post('/create', userHandler.createUser);
        this.router.get('/list', userHandler.listUsers);
    }

    getRouter() {
        return this.router.routes();
    }
}

module.exports = UserRouter; 