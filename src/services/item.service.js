import models from "../database/models/index"
import "regenerator-runtime/runtime";
const{Item} = models;

/**
 * @description This model deals with Item model
 */

class ItemService{
    static async createItem(value){
        let item = await Item.create(value)
        return item
    }
    static async getItemById(id){
        let item = await Item.findOne({where:{id:id}})
        return item

    }
    static async getAllItems(){
        let item = await Item.findAll()
        return item

    }
    static async updateItemById(id,value){
        let item = await Item.update(value,{where:{id:id}})
        return item

    }

    static async deleteItemById(id){
        let item = await Item.destroy({where:{id:id}})
        return item
    }


}
export default ItemService