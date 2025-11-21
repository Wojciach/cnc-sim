import type { Coordinate, Modals } from "./modals.js";
export type ijkr = {
    i: number;
    j: number;
    k: number;
    r: number;
} | null;
export type fullCoordInfo = {
    coord: Coordinate;
    ijkr: ijkr;
    g: Modals['G00'];
};
export declare const chainOfCoordinates: fullCoordInfo[];
//# sourceMappingURL=chainOfCoordinates.d.ts.map