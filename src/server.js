const express = require('express');

const postRouter = require('./routers/posts.js');
const errorHandler = require('./middleware/errorHandler.js');

const app = express();

app.use(express.static('dist'));
app.use('/api', postRouter);
app.use(errorHandler);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});