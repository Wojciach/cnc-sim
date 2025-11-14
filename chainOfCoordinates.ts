import type { Coordinate, Modals } from "./modals.js";

export type ijkr = {i: number, j: number, k: number, r: number};

export type fullCoordInfo = {coord: Coordinate, ijkr: ijkr,  g: Modals['G00']};

export const chainOfCoordinates: fullCoordInfo[] = [{
    coord: {x: 0, y: 0, z: 0},
    ijkr: {i: 0, j: 0, k:0, r:0},
    g: null
}];