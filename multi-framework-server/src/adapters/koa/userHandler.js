class UserHandler {
    constructor(userService) {
        this.userService = userService;
        this.createUser = this.createUser.bind(this);
        this.listUsers = this.listUsers.bind(this);
    }

    async createUser(ctx) {
        try {
            const user = await this.userService.createUser(ctx.request.body);
            ctx.status = 201;
            ctx.body = user;
        } catch (err) {
            ctx.status = 400;
            ctx.body = { error: err.message };
        }
    }

    async listUsers(ctx) {
        const users = await this.userService.listUsers();
        ctx.body = users;
    }
}

module.exports = UserHandler; 