import type { Coordinate, Modals } from "./modals.js";
type ijkr = {
    i: number;
    j: number;
    k: number;
    r: number;
};
type fullCoordInfo = {
    coord: Coordinate;
    ijkr: ijkr;
    g: Modals['G00'];
};
export declare const chainOfCoordinates: fullCoordInfo[];
export {};
//# sourceMappingURL=chainOfCoordinates.d.ts.map