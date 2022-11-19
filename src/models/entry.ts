import { Aircraft } from "./aircraft";
import { Airport } from "./airport";

export class Entry {
    id: string = "";
    aircraft: Aircraft | null = null;
    origin: Airport | null = null;
    destination: Airport | null = null;
    distance: number = 0;
    fuelPctTakeoff: number = 1.0;
    fuelPctLanding: number = 1.0;
    flightTime: number = 0;
}