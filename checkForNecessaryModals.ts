import { modals } from "./modals.js";

export function checkForNecessaryModals(line: string, index: number): boolean {
    const necessaryModals = [modals.G17, modals.G20, modals.G90, modals.G94, modals.G96];
    necessaryModals.forEach((necMod) => {
        if(necMod === null) {
            console.log(`Error on line ${index + 1}: one of necessary modals is not set.`, necMod);
            return false;
        }
    })
    return true;
}