import db from "./db.js";

const servingsDB = {
    getAllServings: async () => {
        return db.query("SELECT * FROM servings")
    },

    addServing: async(serving) => {
        return db.query("INSERT INTO servings (name, price, time) VALUES (?, ?, ?)", [serving.name, serving.price, serving.time]);
    }
}

export default servingsDB;