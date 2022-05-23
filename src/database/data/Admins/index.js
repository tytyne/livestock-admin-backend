import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "pg"



const getAdmins= async()=>{
try{
    let pool=await sql.connect(config.sql)
    const sqlQueries= await utils.loadSqlQueries('Admins')
    const adminsList = await pool.request().query(sqlQueries.adminsList);
    return adminsList.recordset;
   
}
catch(error){
    console.log(error.message)
}

}
const loginAdmin = async (credential)=>{
    try{
        let pool = await sql.connect(config.sql)
        const sqlQueries= await utils.loadSqlQueries('Admins')
        const loginData = await pool.request()
        .input('EventTitle', sql.NVarChar(max), eventdata.EventTitle)
        .input('EventStartTime', sql.DateTime2(7), eventdata.EventStartTime)
        .input('email',sql.NVarChar(100),credential.email)
        .input('password',sql.NVarChar(100),credential.password)
        .query(sqlQueries.loginAdmin)
        return loginData.recordset
    }
    catch(error){
        console.log(error.message)
    }

}

const getAdminByEmail = async(data)=>{

    try{ 
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Admins');
        const adminCredentials=await pool.request()
        .input('Email',sql.NVarChar(100),data)
        .query(sqlQueries.adminByEmail)
        return adminCredentials.recordset
    }
    catch(error){
        console.log(error.message)
    }
   
}
const getAdminByInput = async(data)=>{

    try{ 
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Admins');
        const admin=await pool.request()
        .input('Input',sql.NVarChar(100),data)
        .query(sqlQueries.adminByInput)
        return admin.recordset
    }
    catch(error){
        console.log(error.message)
    }
   
}

const getAdminById = async(Id)=>{

    try{ 
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Admins');
        const adminCredentials=await pool.request()
        .input('Id', sql.Int, Id)
        .query(sqlQueries.adminById)
        return adminCredentials.recordset
    }
    catch(error){
        console.log(error.message)
    }
   
}

const createAdmin = async(admindata)=>{
    try{
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries('Admins');
    const adminCredentials=await pool.request()
    .input('FirstName', sql.NVarChar(50), admindata.FirstName)
    .input('LastName', sql.NVarChar(50), admindata.LastName)
    .input('Email', sql.NVarChar(100), admindata.Email)
    .input('Password', sql.NVarChar(100), admindata.Password)
    .input('Status', sql.NVarChar(50), admindata.Status)
    .input('CreatedAt', sql.DateTime, admindata.CreatedAt)
    .input('UpdatedAt', sql.DateTime, admindata.UpdatedAt)
    .input('LastLogin', sql.DateTime, admindata.LastLogin)
    .input('VerificationID', sql.NVarChar(100), admindata.VerificationID)
    .input('Role', sql.NVarChar(50), admindata.Role)
    .input('Phone', sql.NVarChar(50), admindata.Phone)
    .input('PhoneStatus', sql.NVarChar(50), admindata.PhoneStatus)
    .input('PasswordResetCode', sql.NVarChar(50), admindata.PasswordResetCode)
    .input('ImageUrl', sql.NVarChar, admindata.ImageUrl)
    .query(sqlQueries.registerAdmin)
    return adminCredentials.recordset

    }
    catch(error){
        console.log(error.message)
    }
    

}
const updatePassword=async(Id,Password)=>{

    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Admins');
        const adminCredentials=await pool.request()
        .input('Id', sql.Int,Id)

        .input('Password', sql.NVarChar(100), Password)
        .query(sqlQueries.adminUpdatePassword)
        return adminCredentials.recordset
    }
    catch(error){
        console.log(error.message)
    }
}
const deleteAdmin = async (Id) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Admins');
        const deleteadmin = await pool.request()
            .input('Id', sql.Int,Id)
            .query(sqlQueries.deleteAdmin);
        return deleteadmin.recordset;
    } catch (error) {
        return error.message;
    }
}

export default{
    getAdmins,loginAdmin,getAdminByEmail,createAdmin,deleteAdmin,getAdminById,getAdminByInput,updatePassword
}