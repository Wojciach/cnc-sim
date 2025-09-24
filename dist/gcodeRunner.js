import { updateActiveBase, updateSpindlePosition } from "./setActiveModalFunctions.js";
import { singleModalCommandRunner } from "./singleCommandRunner.js";
import { checkForG10 } from "./checkForG10.js";
import { lineValidation } from "./lineVlidation.js";
import { modals } from "./modals.js";
export function runGCode(gCodeString) {
    const allLines = gCodeString.split(";");
    allLines.forEach((line, index) => {
        console.log(line);
        // if(!lineValidation(line)) {
        //     console.log(` - E R R O R :  I N  L I N E  ${index + 1} ! - `);
        //     return;
        // }
        // const commandCodes = line.match(/[MG]\d{1,2}/ig);
        // commandCodes?.forEach(command => {
        //     singleModalCommandRunner(command);
        // });
        checkForG10(line);
    });
    updateSpindlePosition();
    updateActiveBase();
    console.log(modals);
}
//# sourceMappingURL=gcodeRunner.js.map