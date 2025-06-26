const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const { userService } = require('../../di/container');
const UserHandler = require('./userHandler');
const UserRouter = require('./userRouter');

const app = new Koa();
app.use(bodyParser());

const userHandler = new UserHandler(userService);
const userRouter = new UserRouter(userHandler);

app.use(userRouter.getRouter());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Koa server running on http://localhost:${PORT}`);
}); 