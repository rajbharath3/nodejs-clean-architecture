class UserHandler {
    constructor(userService) {
        this.userService = userService;
    }

    async createUser(req, res) {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', async () => {
            try {
                const userData = JSON.parse(body);
                const user = await this.userService.createUser(userData);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(user));
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            }
        });
    }

    async listUsers(req, res) {
        const users = await this.userService.listUsers();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(users));
    }
}

module.exports = UserHandler; 