import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Lifestyle} = models;

class LifestyleService{
    
    static async createLifestyle(value){

        let operation= await Lifestyle.create(value)
        return operation
    }

    static async updateByIdLifestyle(id,value){

        let operation = await Lifestyle.update(value,{where:{id:id}})
        return operation

    }

    static async getByIdLifestyle(){
        let operation = await Lifestyle.findOne({where:{id:id}})
        return operation

    }

    static async getAllLifestyles(){
        let operation = await Lifestyle.findAll()
        return operation
    }

    static async deleteByIdLifestyle(id){
        let operation = await Lifestyle.destroy({where:{id:id}})
        return operation
    }

    


}

export default LifestyleService