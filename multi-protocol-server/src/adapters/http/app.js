const express = require('express');
const bodyParser = require('body-parser');
const { userService } = require('../../di/container');
const UserHandler = require('./userHandler');
const UserRouter = require('./userRouter');

const app = express();
app.use(bodyParser.json());

const userHandler = new UserHandler(userService);
const userRouter = new UserRouter(userHandler);

app.use('/users', userRouter.getRouter());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`HTTP server running on http://localhost:${PORT}`);
}); 