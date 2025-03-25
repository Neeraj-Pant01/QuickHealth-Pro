const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model');

exports.registerUserService = async (data) => {
    const { username, email, password, role } = data
    try {
        const hashedpass = bcrypt.hashSync(password, 10);
        if (data) {
            const newUser = new userModel({ username, email, password: hashedpass, role })
            const savedUser = await newUser.save();
            return savedUser;
        } else {
            return { message: "invalid feilds !" }
        }
    } catch (err) {
        return err.message
    }
}

exports.loginUser = async (data) => {
    const { email, password } = data;
    try {
        const user = await userModel.findOne({ email: email });
        if (!user) throw new Error('user not found !')
        const decryptpass = bcrypt.compareSync(password, user.password);
        if (!decryptpass) throw new Error("password didn't matched ");

        const token = jwt.sign({id:user._id, role:user.role}, process.env.JWTKEY, {expiresIn:"1d"})
        return {user,...token}
    } catch (err) {
        return err.message
    }
}