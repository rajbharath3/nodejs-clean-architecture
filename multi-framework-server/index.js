require('dotenv').config();
const config = require('./src/config');

if (config.framework === 'express') {
    require('./src/adapters/express/app');
} else if (config.framework === 'koa') {
    require('./src/adapters/koa/app');
} else if (config.framework === 'fastify') {
    require('./src/adapters/fastify/app');
} else {
    console.error('Unknown framework:', config.framework);
    process.exit(1);
} 