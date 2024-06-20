import servingsDB from '../dal/servings.js';

const service = {
    getAllServings: async () => {
        const [data] = await servingsDB.getAllServings();
        return data;
    },

    addServing: async (serving) => {
        const data = await servingsDB.addServing(serving);
        return data[0].insertId;
    }
}

export default service; 