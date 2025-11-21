import type { ijkr } from "./chainOfCoordinates.js";
import type { Coordinate } from "./modals.js";
import type { Modals } from "./modals.js";
export declare class extractAndCheckIJKR {
    static run(line: string, oldCoord: Coordinate, modal: Modals['G00']): ijkr | null;
    static extractIJKR(line: string): ijkr;
    static extractCoordinates(line: string): Coordinate | null;
    static getRadius(line: string): number;
    static checkingRadiusSize(line: string, oldCoord: Coordinate): boolean;
}
//# sourceMappingURL=extractAndCheckIJKR.d.ts.map