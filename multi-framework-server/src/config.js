require('dotenv').config();
module.exports = {
    framework: process.env.FRAMEWORK || 'express' // 'express', 'koa', or 'fastify'
}; 