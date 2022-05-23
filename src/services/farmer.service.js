import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Farmer} = models;
console.log("check farmer",Farmer)

/**
 * @description This model deals with Farmer model
 */

class FarmerService{
    static async createFarmer(formData){
        let farmer = await Farmer.create(formData)
        return farmer
    }
    static async getFarmerById(id){
        let farmer = await Farmer.findOne({where:{id:id}})
        return farmer  

    }
    static async getAllFarmers(userId){
        let farmer = await Farmer.findAll({where:{createdBy:userId}})
        return farmer

    }
    static async checkNID(value) {
        let user;
          user = await Farmer.findOne({ where: {nid: value } });
          return user; 
    }
    static async updateById(value,id){
        let farmer = await Farmer.update(value,{where:{id:id},returning: true,
            plain: true,})

        
        return farmer

    }
    // static async updateById(updates, id) {
    //     let nidCheck, colsAffected;
    //     if (updates.nid) {
    //       nidCheck = await Farmer.findAll({
    //         where: { nid: updates.nid },
    //       });
    //     }
    
    //     if (
    //       nidCheck == undefined
    //       || nidCheck.length == 0
    //       || (nidCheck.length == 1 && nidCheck[0].id == id)
    //     ) {
    //       colsAffected = await Farmer.update(updates, {
    //         where: { id },
    //         attributes: { exclude: "phone" },
    //       });
    //       if (colsAffected[0] != 0) {
    //         return true;
    //       }
    //       return false;
    //     }
    //     return "NID has been taken";
    //   }

    static async deleteById(id,userId){
        let farmer = await Farmer.destroy({where:{id:id}})
        return farmer
    }
    static async countFarmers(){
        let farmer = await Farmer.count()
        return farmer
    }


}
export default FarmerService