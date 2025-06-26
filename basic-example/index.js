const config = require('./src/config');

if (config.protocol === 'http') {
    require('./src/adapters/http/app');
} else if (config.protocol === 'http2') {
    require('./src/adapters/http2/server');
} else if (config.protocol === 'grpc') {
    require('./src/adapters/grpc/server');
} else {
    console.error('Unknown protocol:', config.protocol);
    process.exit(1);
} 