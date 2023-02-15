const userService = require('../services/user');

async function createUser(req, res) {
    try
    {
        console.log('req.body', req.body);
        const {userName, password, isAdmin} = req.body;
        const result = await userService.createUser(userName, password, isAdmin);
        res.status(200).json(result);
    }
    catch(error)
    {
        res.status(500).json(error);
    }
 }
 async function loginUser(req, res) {
    try
    {
        console.log('req.body', req.body);
        const {userName, password} = req.body;
        const result = await userService.loginUser(userName, password);
        res.status(200).json(result);
    }
    catch(error)
    {
        res.status(500).json(error);
    }
 }
module.exports={createUser, loginUser};