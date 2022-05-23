import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Operation} = models;

class OperationService{
   
    static async createOperation(value){

        let operation= await Operation.create(value)
        return operation
    }

    static async updateOperationById(id,value){

        let operation = await Operation.update(value,{where:{id:id}})
        return operation

    }

    static async getOperationById(){
        let operation = await Operation.findOne({where:{id:id}})
        return operation

    }

    static async getAllOperations(userId){
        let operation = await Operation.findAll({where:{createdBy:userId}})
        return operation
    }

    static async deleteByIdOperation(id){
        let operation = await Operation.destroy({where:{id:id}})
        return operation
    }

    


}

export default OperationService