import { dbContext } from '../db/DbContext';
import { BadRequest } from '../utils/Errors';

class HousesService {

    async find(query = {}) {
        return await dbContext.Houses.find(query)
    }
    async findById(id) {
        const house = await dbContext.Houses.findById(id)
        if (!house) {
            throw new BadRequest("Invalid Id");
        }
        return house;
    }
    async create(newHouse) {
        let house = await dbContext.Houses.create(newHouse)
        return house;
    }
    async delete(id) {
        return await dbContext.Houses.findByIdAndDelete(id)
    }
    async edit(id, body) {
        return await dbContext.Houses.findByIdAndUpdate(id, body, { new: true })
    }

}

export const housesService = new HousesService();