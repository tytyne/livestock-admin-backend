import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const jwtToken={
    createToken({Id,Email,Role}){
        return jwt.sign({id,email,role},
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"4h"})

    },
    //dynamically generated insteady or static
    //generate dynamic access token // to do search on it
    verifyToken(token){
        const decoded=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"4h"});
        return decoded

    }
}