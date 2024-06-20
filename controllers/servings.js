import servingsService from "../services/servings.js";

const controller = {
  getAllServings: async (req, res) => {
    const servings = await servingsService.getAllServings();
    res.json(servings);
  },

  addServing: async (req, res) => {
    const serving = req.body;

    if (!serving.name || !serving.price || !serving.time) {
      res.status(400).send("Invalid serving data");
      return;
    }

    const result = await servingsService.addServing(serving);
    res.status(200).json(result);
  },

  getServing: async (req, res) => {
    const id = req.params.id;

    if(id < 0){
        res.status(400).send("Invalid id");
        return;
    }

    const serving = await servingsService.getServing(id);
    
    if (!serving) {
      res.status(404).send("Serving not found");
      return;
    }

    res.status(200).json(serving);

  }
};
export default controller;