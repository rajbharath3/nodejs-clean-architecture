const fastify = require('fastify')({ logger: true });
const { userService } = require('../../di/container');
const UserHandler = require('./userHandler');
const userRoutes = require('./userRouter');

const userHandler = new UserHandler(userService);

fastify.register(userRoutes, userHandler);

const PORT = process.env.PORT || 3000;
fastify.listen({ port: PORT }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Fastify server running on ${address}`);
});
