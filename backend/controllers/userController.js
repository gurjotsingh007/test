const User = require("../Model/UserModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler");

exports.registerUser = catchAsyncErrors(async(req, res, next) => {
    //cloudinary
    const {name, email, password} = req.body;
    
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"This is public id",
            url:"This is url"
        }
    });

    sendToken(user, 201, res);
});

exports.loginUser = catchAsyncErrors(async(req, res, next) => {
    const {email, password} = req.body;
    if(!email || !password){
        return next(new ErrorHandler("Please enter the email or password", 400));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    const isCorrectPassword = await user.comparePasswords(password);

    if(!isCorrectPassword){
        return next(new ErrorHandler("Invalid email or password", 401));
    }

    sendToken(user, 200, res);
});

exports.logout = catchAsyncErrors(async(req, res, next) => {
    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: "User Logged Out Successfully"
    })
});