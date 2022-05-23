
import utils from "../../../utils/helpers"
import config from "../../config/config"
import sql from "pg"


const getUsers=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const data = await pool.request().query(sqlQueries.usersList);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}
const countingUsers=async()=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const data = await pool.request().query(sqlQueries.countUsers);
        return data.recordset;
    }
    catch(error){
        console.log(error)
        console.log(error.message)
    }

}

const updatingUser=async(userId,data)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('Id', sql.Int, userId)
            .input('FirstName', sql.VarChar(50), data.FirstName)
            .input('LastName', sql.VarChar(50), data.LastName)
            .input('Email', sql.VarChar(100), data.Email)
            .input('Status', sql.VarChar(50), data.Status)
            .input('Phone', sql.VarChar(500), data.Phone)
            .query(sqlQueries.updateUser);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}
const getUserById =async(Id)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('Id', sql.Int,Id)
            .query(sqlQueries.userById);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

const disableUserById =async(userId)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('Id', sql.Int, userId)
            .query(sqlQueries.disableUser);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

const deleteUserById=async(userId)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('Id', sql.Int, userId)
            .query(sqlQueries.deleteuser);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}
const getUserByEmail=async(userdata)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('Email', sql.NVarChar(100), userdata)
            .query(sqlQueries.userByEmail);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}
const getUserByStatus=async(userdata)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('Status', sql.NVarChar(100), userdata)
            .query(sqlQueries.userByStatus);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

const getUserByFistname=async(userdata)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('FirstName', sql.NVarChar(100), userdata)
            .query(sqlQueries.userByFirstname);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}
const getUserByLastname=async(userdata)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('LastName', sql.NVarChar(100), userdata)
            .query(sqlQueries.userByLastname);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}
const getUserByGender=async(userdata)=>{
    // try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('Gender', sql.NVarChar(100),userdata)
            // .input('UserId',sql.Int,userdata)
            .query(sqlQueries.userByGender);
        return user.recordset;
    // }
    // catch(error){
    //     console.log(error.message)
    // }
}
const getUserByLga=async(userdata)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('LGA', sql.NVarChar(100), userdata)
            .query(sqlQueries.userByLga);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}
const getUserByInput=async(userdata)=>{
    try{
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('User');
        const user = await pool.request()
            .input('Input', sql.NVarChar(100), userdata)
            .query(sqlQueries.userByInput);
        return user.recordset;
    }
    catch(error){
        console.log(error.message)
    }
}

export default{getUsers,getUserById,getUserByEmail,getUserByStatus,getUserByFistname,getUserByLastname,getUserByLga,getUserByInput,getUserByGender,deleteUserById,updatingUser, disableUserById,countingUsers}

