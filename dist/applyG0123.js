import { singleCommandRunner } from './singleCommandRunner.js';
import { modals } from "./modals.js";
export function applyG0123(line) {
    console.log('AAAPPLLYYIINNGG G0000 CCOOMMMMAANND D:', line);
    if (line.match(/G00/ig) !== null) {
        singleCommandRunner(line);
        return true;
    }
    else if ((line.match(/G01|G02|G03/ig) !== null) && ((modals.F === null) || (modals.F < 0.00001))) {
        console.log(" - E R R O R :  F not detected or set below 0.00001 -  please set F speed before using G01/G02/G03 movement commands.");
        return false;
    }
    else if ((line.match(/G02|G03/ig) !== null)) {
        if (line.match(/[IJK]\d+\.?\d*|R\d+\.?\d*/ig) === null) {
            console.log(" - E R R O R :  I, J, K or R not detected for G02/G03 command -  please provide proper arc parameters.");
            return false;
        }
        else {
            singleCommandRunner(line);
            return true;
        }
    }
    else {
        console.log(" - E R R O R :  U N E X P E C T E D  E R R O R  I N  A P P L Y I N G  G00/G01/G02/G03  C O M M A N D ! - ");
        return false;
    }
}
//# sourceMappingURL=applyG0123.js.map