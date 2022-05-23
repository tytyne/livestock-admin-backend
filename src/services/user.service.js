import models from "../database/models/index.js";
import "regenerator-runtime/runtime";

const { User } = models;
console.log(User)
/**
 * @description This service deals with the User model
 */
export default class UserServices {
/**
   * @description this service create a new user in the db
   * @param {object} user
   * @return {object} return the created user
   */
  static async createUser(user) {
    const users = await User.create(user);
    const { password, ...result } = users.dataValues;
    return result;
  }

  /**
   * @description this service create a new user in the db
   * @param {object} value
   * @return {object} return object if found
   */
  static async getUserByIdOrEmail(value) {
    let user;
    if (typeof value === "string") {
      user = await User.findOne({ where: { email: value } });
      return user;
    }
    return await User.findOne({ where: { id: value } });
  }
  static async checkUsername(value) {
    let user;
      user = await User.findOne({ where: {username: value } });
      return user; 
  }


  static async updateUser(decoded){
    const users = await User.update({isVerified:true}, {
      where: { id: decoded.id },
      returning: true,
      plain: true,
      })
    return users
  }

  static async upDateUserInfo(updates, id) {
    let userNameCheck, colsAffected;
    if (updates.username) {
      userNameCheck = await User.findAll({
        where: { username: updates.username },
      });
    }

    if (
      userNameCheck == undefined
      || userNameCheck.length == 0
      || (userNameCheck.length == 1 && userNameCheck[0].id == id)
    ) {
      colsAffected = await User.update(updates, {
        where: { id },
        attributes: { exclude: "email" },
      });
      if (colsAffected[0] != 0) {
        return true;
      }
      return false;
    }
    return "Username has been taken";
  }



















  static async updatePassword(hash, decoded) {
    const users = await User.update(
      { password: hash },
      {
        where: { email: decoded.email },
        returning: true,
        plain: true,
      }
    );
    return users;
  }


  static async changingPassword(hash,id){
    const users = await User.update(
      { password: hash },
      {
        where: { id:id },
      returning: true,
      plain: true,
      }
  );
    return users
  }
  static async getUserByEmail(value) {
    let users;
        users = await User.findOne({ where: { email: value }});

      return users;
    }
}