const jwt = require("jsonwebtoken");

const verifyToken = async (req, res,next)=>{
    const authheader = req.headers.authorization;
    if(authheader){
        const token = authheader.split(' ')[1];
        jwt.verify(token, process.env.JWTKEY, (err,payload)=>{
            if(err) return next('invalid token')
            req.user = payload;
        })
        next();  
    }else{
        res.status(400).json({message:"authheader is not present"})
    }
}

module.exports = verifyToken;