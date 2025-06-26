const express = require('express');

class UserRouter {
    constructor(userHandler) {
        this.router = express.Router();
        this.router.post('/create', userHandler.createUser);
        this.router.get('/list', userHandler.listUsers);
    }

    getRouter() {
        return this.router;
    }
}

module.exports = UserRouter; 