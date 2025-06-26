function userRoutes(fastify, userHandler, done) {
    fastify.post('/users/create', userHandler.createUser);
    fastify.get('/users/list', userHandler.listUsers);
    done();
}

module.exports = userRoutes; 