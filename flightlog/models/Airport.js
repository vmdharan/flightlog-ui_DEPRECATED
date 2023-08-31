import mongoose, { Schema } from "mongoose";
import { AIRPORT_COLLECTION } from "../db/dbconfig";

export const AirportSchema = new Schema({
    id: String,
    name: String,
    code: String
});

export const AirportModel = mongoose.model(AIRPORT_COLLECTION, AirportSchema);