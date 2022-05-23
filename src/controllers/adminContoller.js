import AdminData from "../database/data/Admins"
import { jwtToken } from "../utils/token.util"
import hash from "../utils/hash"
import Mailer from "../utils/mail/email";


const {hashingPassword,decodePassword} = hash



class AdminController {
    static async getAdmins(req, res) {
        const adminlist = await AdminData.getAdmins()
        console.log(adminlist)
        if (adminlist === 0)
            return res.status(404).json({ message: "no admin found!" })
        else
            return res.status(200).json({ message: "admins list", adminlist })

    }

    static async register(req, res, next) {
        try {
            let { firstname, lastname, email } = req.body
            const checkPassword = await hashingPassword(password)
            const checkEmail = await AdminData.getAdminByEmail(email)
            if (checkEmail.length !== 0) return res.status(400).json({ error: "the email is already in use" })
            const admin = await AdminData.createAdmin({
                FirstName: firstname,
                LastName: lastname,
                Email: email,
                Password: checkPassword,
                Status: "Active",
                Role: 1,
                Phone: phone,
                CreatedAt: new Date(),
                ImageUrl: "https://strongr.blob.core.windows.net/profiles/1badf586-fd8d-44ca-beb9-c5efec7cd26c-digital_government_Adobe"

            })

            return res.status(200).json({ message: "the admin created successfully!", admin })


        }
        catch (err) {
            return next(new Error(err))
        }

    }
    static async login(req, res) {
        const { email, password } = req.body
        const user = await AdminData.getAdminByEmail(email)
        console.log(user)
        if (user.length === 0)
            return res.status(400).json({ error: "no user found!" })
        const passwordTodecode = user[0].Password
        const decrypss = await decodePassword(password, passwordTodecode)
        console.log(decrypss)
        if (!decrypss) return res.status(400).json({ error: "incorrect email or password" })
        const name=`${user[0].FirstName}`
        const token = jwtToken.createToken(user[0])
        return res.status(200).json({ message: "thank for signin",name,token })
    }
    static async forgetPassword(req, res, next) {
        try {

            const { email } = req.body
            const user = await AdminData.getAdminByEmail(email)

            if (user.length === 0)
                return res.status(400).json({ error: "no user with that email" });
            
                const token = jwtToken.createToken(user[0])

            const mail = new Mailer({
                to: `${user[0].FirstName} <${user[0].Email}>`,
                firstname: `${user[0].FirstName}`,
                header: 'Forget password',
                instructions: 'Here are your password reset instructions.',
                messageBody: 'A request to reset your Admin password has been made. If you did not make this request, simply ignore this email. If you did make this request, please reset your password:',
                optionLink: `${process.env.FRONTEND_URL}/reset_password/${token}`,
                browserMessage: `If the button above does not work, try copying and pasting the URL into your browser.`,
                Button: true
            });
            mail.InitButton({
                text: 'Reset password',
                link: `${process.env.FRONTEND_URL}/reset_password/${token}`
            });
            await mail.sendMail();
            return res.status(200).json({ message: "Check Email to Reset Password", user });
        }
        catch (e) {
            return next(new Error(e))
        }

    }
    /**
     * @description reset password
     * @param {object} req request 
     * @param {*} res  response
     * @param {*} next checking error
     * @return passwordMatch error
     * 
     */
    static async resetPassword(req, res,next) {

        try{
        const { Password, ConfirmPassword } = req.body;
        if (Password !== ConfirmPassword)
            return res.status(400).json({ error: "password doesn\'t match!" });
        const { token } = req.params;
        const decoded = jwtToken.verifyToken(token);
        console.log(decoded)
        const user = await await AdminData.getAdminByEmail(decoded.Email)

        const hash = await hashingPassword(Password)
        console.log(hash)
        console.log(decoded.Id)
        const updatedUser = await AdminData.updatePassword(decoded.Id,hash)
        return res.status(200).json({ message: "the password updated sucessfully!"})

        }
        catch(e){
            return next(new Error(e))
        }

    }

    static async deleteAdmin(req, res, next) {

        try {
            const adminId = req.params.id;
            const admin = await AdminData.getAdminById(adminId)
            console.log(admin)
            if (admin.length === 0)
                return res.status(400).json({ error: "The Id doesn\'t exist!" })
            else
                await AdminData.deleteAdmin(adminId);

            return res.status(200).json({ message: "admin deleted successfully" })

        } catch (err) {
            return next(new Error(err))
        }



    }
    static async getAdminById(req, res, next) {

        try {
            const adminId = req.query.id;
            const admin = await AdminData.getAdminById(adminId)

            if (admin.length === 0)
                return res.status(400).json({ error: "The Id doesn\'t exist!" })
            else

                return res.status(200).json({ message: "admin is", admin })

        } catch (err) {
            return next(new Error(err))
        }
    }
    static async getAdminValue(req, res, next) {

        try {
            
            const admin =  await await AdminData.getAdminById(req.user.Id)

            if (admin.length === 0)
                return res.status(400).json({ error: "we can\'t get your information" })
            else

                return res.status(200).json({ message: "admin is", admin })

        } catch (err) {
            return next(new Error(err))
        }

    }
        /**
         * @description reset password
         * @param {object} req request 
         * @param {*} res  response
         * @param {*} next checking error
         * @return passwordMatch error
         * 
         */
   

 
    static async getAdminByEmail(req,res,next){

        try {
            const adminEmail = req.query.email;
            const admin= await AdminData.getAdminByEmail(adminEmail)
          
            if(admin.length===0) 
            return res.status(400).json({error:"The email doesn\'t exist!"})
            else
          
            return res.status(200).json({message:"admin is",admin})
           
        } catch (err) {
            return next(new Error(err))
        }
    }
    static async getAdminByInput(req,res,next){

        try {
            const search = req.query.input;
            const admin= await AdminData.getAdminByInput(search)
          
            if(admin.length===0) 
            return res.status(400).json({error:"no match to your search"})
            else
          
            return res.status(200).json({message:"admin is",admin})
           
        } catch (err) {
            return next(new Error(err))
        }
    }
    



}
export default AdminController