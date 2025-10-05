import { updateActiveBase, updateSpindlePosition } from "./setActiveModalFunctions.js";
import { singleModalCommandRunner } from "./singleCommandRunner.js";
import { checkForG10 } from "./checkForG10.js";
import { checkForG43 } from "./checkForG43.js";
import { lineValidation } from "./lineVlidation.js";
import { modals, workCoordinateSystems } from "./modals.js";
import { FS_CommnadsPrevalidation } from "./FS_CommandsPrevalidation.js";
//import { checkForSpidneRepositionLines } from "./checkForSpidneRepositionLines.js";
export function runGCode(gCodeString) {
    const allLines = gCodeString.split(";");
    allLines.forEach((line, index) => {
        const lineWithCommentsRemoved = line.replace(/\([^)]*\)/g, '');
        // pre validation some of the commands in the line
        const G10_Detetced = checkForG10(lineWithCommentsRemoved);
        if (G10_Detetced)
            return;
        const SF_CommnadsPrevalidation = FS_CommnadsPrevalidation(lineWithCommentsRemoved);
        if (!SF_CommnadsPrevalidation)
            return;
        // const G43_Detetced = checkForG43(lineWithCommentsRemoved);
        // if(G43_Detetced) return;
        // const G40_Detetced = checkForG43(lineWithCommentsRemoved);
        // if(G40_Detetced) return;
        // const checkForMovement = checkForSpidneRepositionLines(lineWithCommentsRemoved);
        // if(!lineValidation(lineWithCommentsRemoved)) {
        //     console.log(` - E R R O R :  I N  L I N E  ${index + 1} ! - `);
        //     return;
        // }
        // Regex pattern to match G, M, X, Y, Z, T, S, F, H, D commands with their values
        // this part of the code is for splitting the line into separate commands and running them one by one
        const pattern = /\b[MG]\d{1,2}\b|\b[XYZ]\s*[-+]?\d+\.?\d*\b|\bT\s*\d{1,2}\b|\b[FS]\s*\d+\.?\d*\b|\bH\s*\d{1,2}\b|\bD\s*\d{1,2}\b/gi;
        const commandCodesOfThisLine = lineWithCommentsRemoved.match(pattern) || [];
        console.log(" - C O M M A N D S  I N  L I N E : - ", commandCodesOfThisLine);
        commandCodesOfThisLine.forEach(command => {
            singleModalCommandRunner(command);
        });
    });
    updateSpindlePosition();
    updateActiveBase();
    console.log(modals);
    console.log(workCoordinateSystems);
}
//# sourceMappingURL=gcodeRunner.js.map