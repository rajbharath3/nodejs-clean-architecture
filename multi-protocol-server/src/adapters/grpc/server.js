const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');
const { userService } = require('../../di/container');
const UserGrpcService = require('./userGrpcService');

const PROTO_PATH = path.join(__dirname, 'user.proto');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const userProto = grpc.loadPackageDefinition(packageDefinition).user;

const userGrpcService = new UserGrpcService(userService);

const server = new grpc.Server();
server.addService(userProto.UserService.service, {
    CreateUser: userGrpcService.CreateUser.bind(userGrpcService),
    ListUsers: userGrpcService.ListUsers.bind(userGrpcService),
});

const PORT = process.env.GRPC_PORT || 50051;
server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log(`gRPC server running on 0.0.0.0:${PORT}`);
}); 