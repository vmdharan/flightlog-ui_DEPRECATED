import mongoose from "mongoose";
import { DB_NAME, DB_URI } from "./dbconfig";

mongoose.connect(DB_URI + DB_NAME, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (error) => {
    console.error(error);
});

db.once('open', () => {
    console.log('Opened connection to database.');
});

export default db;