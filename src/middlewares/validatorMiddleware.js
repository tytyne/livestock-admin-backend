// import {signup} from "../validation/user.validator"
// import {resetPassword,emailVerify}from "../validation/reset.validator.js"

// export const validateSignup=(req,res,next)=>{

//     const {email,password,firstname,lastname,username}=req.body;
//     const vld=signup.validate({email,password,firstname,lastname,username})
//     if(vld.error){
//         return res.status(400).send(vld.error.details[0].message)
//     }
//     return next();

// }
// export const validatePassword=(req,res,next)=>{

//     const {password,confirmPassword}=req.body;
//     const vld=resetPassword.validate({password,confirmPassword})

//     if(vld.error){
//         return res.status(400).send(vld.error.details[0].message)
//     }
//     return next();
// }


// export const  validateEmail=(req,res,next)=>{

//     const{email}=req.body;
//     const vld=emailVerify.validate({email})
//     if(vld.error){
//         return res.status(400).send(vld.error.details[0].message)
//     }

//     return next()

// }
