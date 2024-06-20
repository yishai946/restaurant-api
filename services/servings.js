import servingsDB from '../dal/servings.js';

const service = {
  getAllServings: async () => {
    const [data] = await servingsDB.getAllServings();
    return data;
  },

  addServing: async (serving) => {
    const data = await servingsDB.addServing(serving);
    return data[0].insertId;
  },

  getServing: async (id) => {
    const [data] = await servingsDB.getServing(id);
    return data;
  }
};

export default service; 