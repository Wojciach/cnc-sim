import { feedAndSpeed, modals } from "./modals.js";
export class CheckNecessaryModalsForMovement {
    static run(line) {
        if (this.isG0123active()) {
            return this.differentiateForG0123(line);
        }
        else {
            return false;
        }
    }
    static _necesaryModalsForG01G02G03() {
        const necessaryModals = [modals.G17, modals.G20, modals.G90, modals.G94, modals.G96];
        const hasNull = (necessaryModals) => necessaryModals.some(item => item === null);
        if (hasNull(necessaryModals)) {
            console.log('Error: one of necessary modals for G00/G01/G02/G03 is not set. G17,G20,G90,G94,G96', necessaryModals);
            return false;
        }
        else {
            console.log('XXXX XXX All necessary modals for G00/G01/G02/G03 are set. G17,G20,G90,G94,G96', necessaryModals);
            return true;
        }
    }
    static _checkForFeed() {
        if ((feedAndSpeed.F !== null) && (feedAndSpeed.F > 0)) {
            console.log('feedAndSpeed.F');
            console.log(feedAndSpeed.F);
            return true;
        }
        else {
            console.log('Error: Feedrate modal F is not set or invalid for G01/G02/G03 movement.');
            console.log(feedAndSpeed.F);
            return false;
        }
    }
    static _circularInterpolationPresent(line) {
        if ((/[IJK]-?\d+\.?\d*/i.test(line) || /R-?\d+\.?\d*/i.test(line))) {
            return true;
        }
        else {
            console.log('Error: Circular interpolation parameters IJK or R are missing for G02/G03 movement.');
            return false;
        }
    }
    static isG0123active() {
        if ((modals.G00 !== null)) {
            return true;
        }
        else {
            console.log('G00/G01/G02/G03 not active!');
            return false;
        }
    }
    static differentiateForG0123(line) {
        if (modals.G00 === 'G00') {
            return this._necesaryModalsForG01G02G03();
        }
        else if (modals.G00 === 'G01') {
            return (this._necesaryModalsForG01G02G03() && this._checkForFeed());
        }
        else if (modals.G00 === 'G02' || modals.G00 === 'G03') {
            return (this._necesaryModalsForG01G02G03() && this._checkForFeed() && this._circularInterpolationPresent(line));
        }
        else {
            return false;
        }
    }
}
//# sourceMappingURL=checkNecessaryModalsForMovement.js.map