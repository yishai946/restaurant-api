import servingsService from "../services/servings.js";

const controller = {
    getAllServings: async (req, res) => {
        const servings = await servingsService.getAllServings();
        res.json(servings);
    },

    addServing: async (req, res) => {
        const serving = req.body;

        if(!serving.name || !serving.price || !serving.time) {
            res.status(400).send("Invalid serving data");
            return;
        }

        const result = await servingsService.addServing(serving);
        res.json(result);
    }
}
export default controller;