import models from "../database/models/index"
const {Event}=models


/**
 * @description This model deals with Event model
 */

class EventService{
    static async createEvent(value){

        let event= await Event.create(value)
        return event
    }
    static async getAllEvents(){
        let event = await Event.findAll()
        return event
    }
    static async getEventById(id){
        let event = await Event.findOne({where:{id:id}})
        return event
    }
    static async updateEventById(value,id){
        let event = await Event.update(value,{where:{id:id},returning: true,
            plain: true,}) 
        return event

    }
    static async deleteEventById(id){
        let event = await Event.destroy({where:{id:id}})
        return event
    }

}

export default EventService