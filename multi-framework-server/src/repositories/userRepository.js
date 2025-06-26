class UserRepository {
    constructor(mysql) {
        this.mysql = mysql; // mysql is a connection or pool
    }

    async save(userData) {
        const [result] = await this.mysql.execute(
            'INSERT INTO users (name, email) VALUES (?, ?)',
            [userData.name, userData.email]
        );
        // Get the inserted user
        const [rows] = await this.mysql.execute(
            'SELECT * FROM users WHERE id = ?',
            [result.insertId]
        );
        return rows[0];
    }

    async findAll() {
        const [rows] = await this.mysql.execute('SELECT * FROM users');
        return rows;
    }
}

module.exports = UserRepository; 