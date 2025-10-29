declare const OFSET_VALUES: readonly [0, 1, 2, 4, 5, 6, 7, 8, 9, null];
type OfsetValues = typeof OFSET_VALUES[number];
type AnyNumber = number | null;
export interface Modals {
    G00: 'G00' | 'G01' | 'G02' | 'G03' | null;
    G17: 'G17' | 'G18' | 'G19' | null;
    G20: 'G20' | 'G21' | null;
    G40: 'G40' | 'G41' | 'G42' | null;
    G43: 'G43' | 'G44' | 'G49' | null;
    G50: 'G50' | 'G51' | null;
    G54: 'G54' | 'G55' | 'G56' | 'G57' | 'G58' | 'G59' | null;
    G80: 'G80' | null;
    G90: 'G90' | 'G91' | null;
    G94: 'G94' | 'G95' | null;
    G96: 'G96' | 'G97' | null;
    M03: 'M03' | 'M04' | 'M05' | null;
    M07: 'M07' | 'M08' | 'M09' | null;
    M48: 'M48' | 'M49' | null;
    M30: 'M30' | null;
    H: OfsetValues;
    D: OfsetValues;
    T: OfsetValues;
    S: number | null;
    F: number | null;
}
export type FeedAndSpeed = {
    S: number | null;
    F: number | null;
};
export declare const feedAndSpeed: FeedAndSpeed;
export declare const possibleModalValues: {
    G00: readonly ["G00", "G01", "G02", "G03", null];
    G17: readonly ["G17", "G18", "G19", null];
    G20: readonly ["G20", "G21", null];
    G40: readonly ["G40", "G41", "G42", null];
    G43: readonly ["G43", "G44", "G49", null];
    G50: readonly ["G50", "G51", null];
    G54: readonly ["G54", "G55", "G56", "G57", "G58", "G59", null];
    G80: readonly ["G73", "G74", "G76", "G80", "G81", "G82", "G83", "G84", "G85", "G86", null];
    G90: readonly ["G90", "G91", null];
    G94: readonly ["G94", "G95", null];
    G96: readonly ["G96", "G97", null];
    M03: readonly ["M03", "M04", "M05", null];
    M07: readonly ["M07", "M08", "M09", null];
    M48: readonly ["M48", "M49", null];
    M30: readonly ["M30", null];
    H: readonly [0, 1, 2, 4, 5, 6, 7, 8, 9, null];
    T: readonly [0, 1, 2, 4, 5, 6, 7, 8, 9, null];
    D: readonly [0, 1, 2, 4, 5, 6, 7, 8, 9, null];
    S: AnyNumber;
    F: AnyNumber;
};
export declare const necessaryModals: (keyof Modals)[];
export declare function createDefaultModals(): Modals;
export declare const modals: Modals;
export type Coordinate = {
    x: number;
    y: number;
    z: number;
};
type SpindlePosition = {
    current: Coordinate;
    next: Coordinate;
};
export declare const spindlePositon: SpindlePosition;
type WorkCoordinateSystems = {
    G54: {
        x: number;
        y: number;
        z: number;
    };
    G55: {
        x: number;
        y: number;
        z: number;
    };
    G56: {
        x: number;
        y: number;
        z: number;
    };
    G57: {
        x: number;
        y: number;
        z: number;
    };
    G58: {
        x: number;
        y: number;
        z: number;
    };
    G59: {
        x: number;
        y: number;
        z: number;
    };
};
export declare const workCoordinateSystems: WorkCoordinateSystems;
export declare function setModalIfValid<K extends keyof Modals>(key: K, value: string | number | null): void;
export {};
//# sourceMappingURL=modals.d.ts.map