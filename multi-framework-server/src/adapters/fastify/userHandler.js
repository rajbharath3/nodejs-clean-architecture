class UserHandler {
    constructor(userService) {
        this.userService = userService;
        this.createUser = this.createUser.bind(this);
        this.listUsers = this.listUsers.bind(this);
    }

    async createUser(request, reply) {
        try {
            const user = await this.userService.createUser(request.body);
            reply.code(201).send(user);
        } catch (err) {
            reply.code(400).send({ error: err.message });
        }
    }

    async listUsers(request, reply) {
        const users = await this.userService.listUsers();
        reply.send(users);
    }
}

module.exports = UserHandler; 