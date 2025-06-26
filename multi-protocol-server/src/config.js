require('dotenv').config();
module.exports = {
    protocol: process.env.PROTOCOL || 'http' // 'http', 'http2', or 'grpc'
}; 