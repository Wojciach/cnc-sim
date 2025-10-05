const OFSET_VALUES = [0, 1, 2, 4, 5, 6, 7, 8, 9, null];
export const feedAndSpeed = {
    S: null,
    F: null
};
export const possibleModalValues = {
    G00: ['G00', 'G01', 'G02', 'G03', null],
    G17: ['G17', 'G18', 'G19', null],
    G20: ['G20', 'G21', null],
    G40: ['G40', 'G41', 'G42', null],
    G43: ['G43', 'G44', 'G49', null],
    G50: ['G50', 'G51', null], //
    G54: ['G54', 'G55', 'G56', 'G57', 'G58', 'G59', null],
    G80: ['G80', null],
    G90: ['G90', 'G91', null],
    G94: ['G94', 'G95', null],
    G96: ['G96', 'G97', null],
    M3: ['M3', 'M4', 'M5', null],
    M7: ['M7', 'M8', 'M9', null],
    M48: ['M48', 'M49', null],
    M30: ['M30', null],
    H: OFSET_VALUES,
    T: OFSET_VALUES,
    D: OFSET_VALUES,
    S: null, // S and F can be any number or null
    F: null,
};
export const necessaryModals = [
    'G00', 'G17', 'G20', 'G40', 'G43', 'G54', 'G90', 'G94', 'G96', 'M3', 'M7'
];
export function createDefaultModals() {
    return {
        G00: null,
        G17: null,
        G20: null,
        G40: null,
        G43: null,
        G50: null,
        G54: null,
        G80: null,
        G90: null,
        G94: null,
        G96: null,
        M3: null,
        M7: null,
        M48: null,
        M30: null,
        H: null,
        T: null,
        D: null,
        S: null,
        F: null,
    };
}
export const modals = createDefaultModals();
export const spindlePositon = {
    current: { x: 0.1, y: 20, z: 1 },
    next: { x: 0, y: 0, z: 0 }
};
export const workCoordinateSystems = {
    G54: { x: 0, y: 0, z: 0 },
    G55: { x: 0, y: 0, z: 0 },
    G56: { x: 0, y: 0, z: 0 },
    G57: { x: 0, y: 0, z: 0 },
    G58: { x: 0, y: 0, z: 0 },
    G59: { x: 0, y: 0, z: 0 }
};
// Helper function for type-safe assignment
// export function setModalIfValid<K extends keyof Modals>(key: K, value: string | number | null): void {
//   const validValues = possibleModalValues[key];
//   if (validValues.includes(value as any)) {
//     modals[key] = value as Modals[K];
//   }
// }
export function setModalIfValid(key, value) {
    const validValues = possibleModalValues[key];
    if (Array.isArray(validValues) && validValues.includes(value)) {
        modals[key] = value;
    }
}
//# sourceMappingURL=modals.js.map