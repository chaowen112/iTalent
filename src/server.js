const express = require('express');

const postRouter = require('./routers/posts.js');
const userRouter = require('./routers/users.js');
const chatlistRouter = require('./routers/chatlists.js');
const chatRouter = require('./routers/chats.js');
const errorHandler = require('./middleware/errorHandler.js');

const app = express();

app.use(express.static('dist'));
app.use('/api', userRouter);
app.use('/api', postRouter);
app.use('/api', chatlistRouter);
app.use('/api', chatRouter);
app.use(errorHandler);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});