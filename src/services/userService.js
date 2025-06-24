const User = require('../models/user');

class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(userData) {
        if (!userData.name || !userData.email) {
            throw new Error('Name and email are required');
        }
        const user = new User(userData);
        return await this.userRepository.save(user);
    }

    async listUsers() {
        return await this.userRepository.findAll();
    }
}

module.exports = UserService; 