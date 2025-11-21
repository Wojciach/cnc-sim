import { extractIJKR } from "./extractIJKR.js";
import { ExtractRadius } from "./extractRadius.js";
import { checkIfRadNotToSmall } from "./checkIfRadNotToSmall.js";
import { extractCoordinates } from "./extractCoordinates.js";
export class extractAndCheckIJKR {
    static run(line, oldCoord, modal) {
        if (modal !== 'G02' && modal !== 'G03') {
            console.log('---no need for radius---');
            return null;
        }
        else if (this.checkingRadiusSize(line, oldCoord)) {
            console.log('---IJKR provided by extractAndCheckIJKR function---', this.extractIJKR(line));
            return this.extractIJKR(line);
        }
        else {
            console.log('---radius check failed in extractAndCheckIJKR function---');
            return null;
        }
    }
    // ijkrValues: ijkr = { i: 0, j: 0, k: 0, r: 0 };
    static extractIJKR(line) {
        return extractIJKR(line);
    }
    static extractCoordinates(line) {
        return extractCoordinates(line);
    }
    static getRadius(line) {
        let ijkr = this.extractIJKR(line);
        return ExtractRadius.getRadius(ijkr);
    }
    ;
    static checkingRadiusSize(line, oldCoord) {
        let previousCoord = oldCoord;
        let currentCoord = this.extractCoordinates(line);
        let radius = this.getRadius(line);
        return checkIfRadNotToSmall(previousCoord, currentCoord, radius);
    }
}
//# sourceMappingURL=extractAndCheckIJKR.js.map