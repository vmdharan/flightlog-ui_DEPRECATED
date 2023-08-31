import mongoose, { Schema } from "mongoose";
import { ENTRY_COLLECTION } from "../db/dbconfig";
import { AircraftSchema } from '../models/Aircraft';
import { AirportSchema } from '../models/Airport';

export const EntrySchema = new Schema({
    id: String,
    aircraft: AircraftSchema,
    origin: AirportSchema,
    destination: AirportSchema,
    distance: Number,
    fuelPctTakeoff: Number,
    fuelPctLanding: Number,
    flightTime: Number
});

export const EntryModel = mongoose.model(ENTRY_COLLECTION, EntrySchema);