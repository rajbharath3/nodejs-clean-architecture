class UserHandler {
    constructor(userService) {
        this.userService = userService;
        this.createUser = this.createUser.bind(this);
        this.listUsers = this.listUsers.bind(this);
    }

    async createUser(req, res) {
        try {
            const user = await this.userService.createUser({ name: 'dummy', email: 'dummy@gmail.com' });
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }

    async listUsers(req, res) {
        const users = await this.userService.listUsers();
        res.json(users);
    }
}

module.exports = UserHandler; 