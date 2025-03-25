const { registerUserService } = require("./auth.service");

exports.registerUser = async (req, res, next) =>{
    const {username, email, role, password} = req.body;
    const data = {username, email, role, password}
    try{
        const  user = await registerUserService(data);
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
}

