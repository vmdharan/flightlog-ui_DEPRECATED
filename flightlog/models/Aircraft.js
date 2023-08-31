import mongoose, { Schema } from "mongoose";
import { AIRCRAFT_COLLECTION } from "../db/dbconfig";

export const AircraftSchema = new Schema({
    id: String,
    name: String,
    type: String
});

export const AircraftModel = mongoose.model(AIRCRAFT_COLLECTION, AircraftSchema);