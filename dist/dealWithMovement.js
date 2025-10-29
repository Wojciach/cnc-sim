import { extractCoordinates } from "./extractCoordinates";
export class DealWithMovement {
    static run(line) {
        if (this.detect(line)) {
            if (this.checkForDoubledeCoordinates(line)) {
                if (this.checkCoordinatesSyntax(line)) {
                    return true;
                }
            }
            ;
        }
        return true;
    }
    static detect(line) {
        if ((/[XYZ]/ig.test(line))) {
            return true;
        }
        else {
            return false;
        }
    }
    static checkForDoubledeCoordinates(line) {
        if ((line.toLowerCase().split('x').length > 2) ||
            (line.toLowerCase().split('y').length > 2) ||
            (line.toLowerCase().split('z').length > 2)) {
            console.log(" - E R R O R :  D U P L I C A T E  C O O R D I N A T E S  D E T E C T E D  I N  L I N E ! - ");
            return false;
        }
        else {
            return true;
        }
    }
    static checkCoordinatesSyntax(line) {
        const coordinatePattern = /\b[XYZ]-?\d+\.?\d*\b/gi;
        if ((coordinatePattern.test(line))) {
            return true;
        }
        else {
            console.log(" - E R R O R :  I N V A L I D  C O O R D I N A T E  S Y N T A X  D E T E C T E D  I N  L I N E ! - ");
            return false;
        }
    }
}
//# sourceMappingURL=dealWithMovement.js.map