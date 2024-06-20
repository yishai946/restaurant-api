import express from "express";
import bodyParser from "body-parser";
import db from "./dal/db.js";
import servingsRouter from './routers/servings.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/servings', servingsRouter);

(async () => {
    try {
        await db.connect();
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    }
    catch(err) {
        console.log(`!!!CRITICAL ERROR !!! - ${err}`)
    }
})()

