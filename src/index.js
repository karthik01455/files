const express = require('express');
const userRouter = require('./routers/user');
const app = express();
const PORT = 5678;
app.use(express.json());
app.use('/user', userRouter);
app.listen(PORT, () => {
    console.log(`Application Started in PORT: ${PORT}`);   
});