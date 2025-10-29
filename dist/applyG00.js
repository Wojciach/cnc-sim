import { singleCommandRunner } from './singleCommandRunner.js';
import { modals } from "./modals.js";
export function applyG00(command) {
    console.log('AAAPPLLYYIINNGG G0000 CCOOMMMMAANND D:', command);
    if (command.match(/G00/ig) !== null) {
        singleCommandRunner(command);
    }
    else if ((command.match(/G01|G02|G03/ig) !== null) && ((modals.F === null) || (modals.F < 0.00001))) {
        console.log(" - E R R O R :  F not detected or set below 0.00001 -  please set F speed before using G01/G02/G03 movement commands.");
    }
    return true;
}
//# sourceMappingURL=applyG00.js.map