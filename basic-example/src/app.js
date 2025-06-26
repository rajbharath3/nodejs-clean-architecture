const express = require('express');
const bodyParser = require('body-parser');
const { userRouter } = require('./di/container');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRouter);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
}); 