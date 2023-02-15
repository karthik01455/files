const {User} = require('../../database/models');
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');

async function createUser(userName, password, isAdmin) {
    console.log('userNmaw', userName);
    const salt = await bcrypt.genSalt(10);
    console.log('salt',salt);
    const hash = await bcrypt.hash(password, salt);
    console.log('salt',hash);
    console.log('userName',isAdmin);
    const value =
        {
            userName: userName,
             password: hash,
             isAdmin: isAdmin
           };
    console.log(value);
  const result= await User.create(value);
  console.log(result);
  return result;
}


async function loginUser(userName,password)
{
    const result = await User.findOne({where:{userName:userName}});
    const validPassword = await bcrypt.compare(password, result.password);
    console.log(validPassword);
    if( validPassword )
    {   console.log('insdie');
    try {
        const token = jwt.sign({userName:userName}, "SECRET", { expiresIn: '1h' });
        const result=client.set(userName, jwtToken)
        console.log('resut'+result);
       console.log(token);
       return token;
    } catch (error) {
        console.log(error);
    }
       
    }
    else
    {   console.log("Invalid Password")
        throw new Error("Invalid Password");
    }
}
module.exports={createUser, loginUser};