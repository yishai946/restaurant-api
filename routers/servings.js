import express from "express";
import servingsController from "../controllers/servings.js"

const router = express.Router();

router.get('/getAll', servingsController.getAllServings);

router.post('/add', servingsController.addServing);

export default router;