import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Farm} = models;


/**
 * @description This model deals with Farm model
 */

class FarmService{
    static async createFarm(formData){
        let farm = await Farm.create(formData)
        return farm
    }
    static async getFarmById(id){
        let farm = await Farm.findOne({where:{id:id}})
        return farm  

    }
    static async getAllFarms(userId){
        let farm = await Farm.findAll({where:{createdBy:userId}})
        return farm

    }
   
    static async updateFarmById(value,id){
        let farm = await Farm.update(value,{where:{id:id},returning: true,
            plain: true,})

        
        return farm

    }

    static async deleteFarmById(id,userId){
        let farm = await Farm.destroy({where:{id:id}})
        return farm
    }
    static async countFarms(){
        let farm = await Farm.count()
        return farm
    }


}
export default FarmService