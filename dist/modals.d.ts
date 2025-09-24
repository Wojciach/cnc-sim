export interface Modals {
    G00: 'G00' | 'G01' | 'G02' | 'G03' | null;
    G17: 'G17' | 'G18' | 'G19' | null;
    G20: 'G20' | 'G21' | null;
    G40: 'G40' | 'G41' | 'G42' | null;
    G49: 'G49' | 'G43' | 'G44' | null;
    G50: 'G50' | 'G51' | null;
    G54: 'G54' | 'G55' | 'G56' | 'G57' | 'G58' | 'G59' | null;
    G80: 'G80' | null;
    G90: 'G90' | 'G91' | null;
    G94: 'G94' | 'G95' | null;
    G96: 'G96' | 'G97' | null;
    M3: 'M3' | 'M4' | 'M5' | null;
    M7: 'M7' | 'M8' | 'M9' | null;
    M48: 'M48' | 'M49' | null;
    M30: 'M30' | null;
    H: string | number | null;
    T: string | number | null;
    S: string | number | null;
    F: string | number | null;
}
export declare const possibleModalValues: {
    G00: readonly ["G00", "G01", "G02", "G03", null];
    G17: readonly ["G17", "G18", "G19", null];
    G20: readonly ["G20", "G21", null];
    G40: readonly ["G40", "G41", "G42", null];
    G49: readonly ["G49", "G43", "G44", null];
    G50: readonly ["G50", "G51", null];
    G54: readonly ["G54", "G55", "G56", "G57", "G58", "G59", null];
    G80: readonly ["G80", null];
    G90: readonly ["G90", "G91", null];
    G94: readonly ["G94", "G95", null];
    G96: readonly ["G96", "G97", null];
    M3: readonly ["M3", "M4", "M5", null];
    M7: readonly ["M7", "M8", "M9", null];
    M48: readonly ["M48", "M49", null];
    M30: readonly ["M30", null];
    H: readonly ["H0", null];
    T: readonly ["T0", null];
    S: readonly ["S0", null];
    F: readonly ["F0", null];
};
export declare const necessaryModals: (keyof Modals)[];
export declare function createDefaultModals(): Modals;
export declare const modals: Modals;
type SpindlePosition = {
    current: {
        x: number;
        y: number;
        z: number;
    };
    next: {
        x: number;
        y: number;
        z: number;
    };
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
export declare function setModalIfValid<K extends keyof Modals>(key: K, value: string): void;
export {};
//# sourceMappingURL=modals.d.ts.map