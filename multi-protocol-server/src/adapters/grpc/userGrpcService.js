class UserGrpcService {
    constructor(userService) {
        this.userService = userService;
    }

    async CreateUser(call, callback) {
        try {
            const user = await this.userService.createUser(call.request);
            callback(null, user);
        } catch (err) {
            callback({ code: 3, message: err.message });
        }
    }

    async ListUsers(call, callback) {
        const users = await this.userService.listUsers();
        callback(null, { users });
    }
}

module.exports = UserGrpcService; 