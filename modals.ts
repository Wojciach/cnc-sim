export interface Modals {
    G17: 'G17' | 'G18' | 'G19' | null,
    G20: 'G20' | 'G21' | null,
    G40: 'G40' | 'G41' | 'G42' | null,
    G49: 'G49' | 'G43' | 'G44' | null,
    G50: 'G50' | 'G51' | null,
    G54: 'G54' | 'G55' | 'G56' | 'G57' | 'G58' | 'G59' | null,
    G80: 'G80' | null,
    G90: 'G90' | 'G91' | null,
    G94: 'G94' | 'G95' | null,
    G96: 'G96' | 'G97' | null,

    M3: 'M3' | 'M4' | 'M5' | null,
    M7: 'M7' | 'M8' | 'M9' | null,
    M48: 'M48' | 'M49' | null,
    M30: 'M30' | null,

    H: string | number | null,
    T: string | number | null,
    S: string | number | null,
    F: string | number | null
}

export const possibleModalValues = {
  G17: ['G17', 'G18', 'G19', null] as const,
  G20: ['G20', 'G21', null] as const,
  G40: ['G40', 'G41', 'G42', null] as const,
  G49: ['G49', 'G43', 'G44', null] as const,
  G50: ['G50', 'G51', null] as const,
  G54: ['G54', 'G55', 'G56', 'G57', 'G58', 'G59', null] as const,
  G80: ['G80', null] as const,
  G90: ['G90', 'G91', null] as const,
  G94: ['G94', 'G95', null] as const,
  G96: ['G96', 'G97', null] as const,
  M3: ['M3', 'M4', 'M5', null] as const,
  M7: ['M7', 'M8', 'M9', null] as const,
  M48: ['M48', 'M49', null] as const,
  M30: ['M30', null] as const,
  H: ['H0', null] as const, // Number types don't have predefined values
  T: ['T0', null] as const,
  S: ['S0', null] as const,
  F: ['F0', null] as const,
};

export const necessaryModals: (keyof Modals)[] = [
    'G17', 'G20', 'G40', 'G49', 'G54', 'G90', 'G94', 'G96', 'M3', 'M7'
];

export function createDefaultModals(): Modals {
    return {
        G17: null,
        G20: null,
        G40: null,
        G49: null,
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
        S: null,
        F: null,
    };
}

export const modals: Modals = createDefaultModals();

type SpindlePosition = {
   current: {x: number, y: number, z: number},
   next: {x: number, y: number, z: number}
};

export const spindlePositon: SpindlePosition = {
    current: {x: 0.1, y: 20, z: 1},
    next: {x: 0, y: 0, z: 0}
};

type WorkCoordinateSystems = {
    G54: {x: number, y: number, z: number},
    G55: {x: number, y: number, z: number},
    G56: {x: number, y: number, z: number},
    G57: {x: number, y: number, z: number},
    G58: {x: number, y: number, z: number},
    G59: {x: number, y: number, z: number}
}

export const workCoordinateSystems: WorkCoordinateSystems = {
    G54: {x: 0, y: 0, z: 0},
    G55: {x: 0, y: 0, z: 0},
    G56: {x: 0, y: 0, z: 0},
    G57: {x: 0, y: 0, z: 0},
    G58: {x: 0, y: 0, z: 0},
    G59: {x: 0, y: 0, z: 0}
};

// Helper function for type-safe assignment
export function setModalIfValid<K extends keyof Modals>(key: K, value: string): void {
  const validValues = possibleModalValues[key];
  if (validValues.includes(value as any)) {
    modals[key] = value as Modals[K];
  }
}