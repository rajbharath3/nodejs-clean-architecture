const http2 = require('http2');
const { userService } = require('../../di/container');
const UserHandler = require('./userHandler');

const userHandler = new UserHandler(userService);

const server = http2.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/users/create') {
        userHandler.createUser(req, res);
    } else if (req.method === 'GET' && req.url === '/users/list') {
        userHandler.listUsers(req, res);
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not found' }));
    }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`HTTP2 server running on http://localhost:${PORT}`);
}); 