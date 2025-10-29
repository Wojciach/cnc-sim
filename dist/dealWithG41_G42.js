import { singleCommandRunner } from "./singleCommandRunner.js";
import { modals } from "./modals.js";
export class DealWithG41_G42 {
    static run(line) {
        if (this.detect(line)) {
            if (this.validate(line)) {
                if (this.apply(line)) {
                    if (this.updateHTML()) {
                        return true;
                    }
                }
            }
        }
        else {
            return false;
        }
        return true;
    }
    static detect(line) {
        if (line.match(/(G41|G42)/ig) !== null) {
            console.log(" - G41  O R  G42  D E T E C T E D ! - ");
            return true;
        }
        else {
            console.log(" - N O  G41  O R  G42  C O M A N D  I N  T H E  L I N E ! - ");
            return false;
        }
    }
    static validate(line) {
        if (((line.match(/(G0?[0,1])/ig)?.length ?? 0) < 1) && (modals.G00 === null)) {
            console.log(" - with G41/G42 you need to add compensation movement set using G00 or G01 whether in this line or in one of the previous lines - ");
            return false;
        }
        else if (((line.match(/(G0?[2,3])/ig)?.length ?? 0) > 1)) {
            console.log(` - Movement G02 G03 are not allowed as compensation movement in G41, G42 line, please try G00 or G01 instead -`);
            return false;
        }
        else if (((line.match(/(G0?[2,3])/ig)?.length ?? 0) > 1)) {
            console.log(` - Movement G02 G03 are not allowed as compensation movement in G41, G42 line -`);
            return false;
        }
        else if (((line.match(/(G0?[0,1])/ig)?.length ?? 0) > 1)) {
            console.log(` - with G41/G42 you need to add only one compensation movement G00 or G01 (you apparently have use ${line.match(/(G0?[0,1])/ig)?.length} parameters) -`);
            return false;
        }
        else if (((line.match(/(M)/ig)?.length ?? 0) > 0)) {
            console.log(" - please do not use 'M' codes in the same line with G41/G42 line - ");
            return false;
        }
        else if (((line.match(/(X)/ig)?.length ?? 0) > 1)) {
            console.log(" - please do not use more than one 'X' parameter in G41/G42 line - ");
            return false;
        }
        else if (((line.match(/(Y)/ig)?.length ?? 0) > 1)) {
            console.log(" - please do not use more than one 'Y' parameter in G41/G42 line - ");
            return false;
        }
        else if (((line.match(/(Z)/ig)?.length ?? 0) > 1)) {
            console.log(" - please do not use more than one 'Z' parameter in G41/G42 line - ");
            return false;
        }
        else if (((line.match(/(D0?[0-9]{1,2})/ig)?.length ?? 0) < 1)) {
            console.log(" - you need to spicify which (D) - Diameter compensation you want to use. Please choose a number between 0 and 9 for example: D01 or D1 for tool T01. Diameter compensation should be use directly in G41/G42 line  - ");
            return false;
        }
        else if (((line.match(/(D)/ig)?.length ?? 0) > 1)) {
            console.log(" - Please do not use more tha one D letter in G41/G42 line  - ");
            return false;
        }
        else if (((line.match(/(^GDXYZ)/ig)?.length ?? 0) > 1)) {
            console.log(" - you have used some letters that are not allowed in G10 line. \n The onnly letters asllowed in this line are: G D X Y Z - ");
            return false;
        }
        else if (((line.match(/\b([XY]\s*-?\d*\.?\d+)(?=\s|$)/ig))?.length ?? 0) < 1) {
            console.log(" - error: coordinate parameter is missing. \n In G41/G42 line you need to use at least one of X Y coordinate with a proper numerical value (For G17 Plane necessary coordinates are X or Y or both of them) \n This parameter is used for spindle movement that is to compenate for D value- ");
            return false;
        }
        console.log(" - G41  O R  G42  I S  V A L I D ! - ");
        return true;
    }
    static apply(line) {
        console.log(" - A P P L Y  G41  O R  G42  C O M A N D ! - ");
        const codeType = line.match(/(G41|G42)/ig);
        const last = codeType?.length ? codeType.length - 1 : 0;
        console.log(" - C O D E  T Y P E : - ", codeType);
        if (!codeType || !codeType[last]) {
            console.log(" - E R R O R  W H I L E  D E A L I N G  W I T H  G41  O R  G42  C O M A N D ! - ");
            return false;
        }
        singleCommandRunner(codeType[last]);
        return true;
    }
    static updateHTML() {
        return true;
    }
}
//# sourceMappingURL=dealWithG41_G42.js.map