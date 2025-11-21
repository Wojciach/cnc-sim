import { updateActiveBase, updateSpindlePosition, displaySpindlePositionCoords } from "./setActiveModalFunctions.js";
import { singleCommandRunner } from "./singleCommandRunner.js";
import { checkForG10 } from "./checkForG10.js";
import { DealWithG41_G42 } from "./dealWithG41_G42.js";
import { modals } from "./modals.js";
import { FS_CommnadsPrevalidation } from "./FS_CommandsPrevalidation.js";
import { generalSyntaxCheck } from "./generalSyntaxCheck.js";
import { DealWithMovement } from "./dealWithMovement.js";
import { CheckNecessaryModalsForMovement } from "./checkNecessaryModalsForMovement.js";
import { chainOfCoordinates } from "./chainOfCoordinates.js";
import { extractCoordinates } from "./extractCoordinates.js";
import { updateChainOfCoordinatesDispay } from "./updateChainOfCoordinatesDispay.js";
import { extractIJKR } from "./extractIJKR.js";
import { extractAndCheckIJKR } from "./extractAndCheckIJKR.js";
//import { checkForSpidneRepositionLines } from "./checkForSpidneRepositionLines.js";
export function runGCode(gCodeString) {
    const allLines = gCodeString.split(";");
    allLines.forEach((line, index) => {
        const lineWithCommentsRemoved = line.replace(/\([^]*\)/g, '');
        //
        // pre validation some of the commands in the line
        //
        const generalSyntaxCheckResult = generalSyntaxCheck(lineWithCommentsRemoved, index);
        if (!generalSyntaxCheckResult)
            return;
        const G10_Detetced = checkForG10(lineWithCommentsRemoved);
        if (G10_Detetced)
            return;
        const pattern = /\b[MG]\d{1,2}\b|\b[XYZ]\s*[-+]?\d+\.?\d*\b|\b[FS]\s*\d+\.?\d*\b|\b[HTD]\s*\d{1,2}\b/gi;
        const commandCodesOfThisLine = lineWithCommentsRemoved.match(pattern) || [];
        console.log(" - C O M M A N D S  I N  L I N E : - ", commandCodesOfThisLine);
        commandCodesOfThisLine.forEach(command => {
            singleCommandRunner(command);
        });
        const movementDetected = DealWithMovement.run(lineWithCommentsRemoved);
        if (movementDetected) {
            if (CheckNecessaryModalsForMovement.run(lineWithCommentsRemoved)) {
                console.log(" - M O V E M E N T  P R O C E S S I N G  A P P R O V E D ! - ");
                const oldCoords = chainOfCoordinates[chainOfCoordinates.length - 1].coord;
                const newCoords = extractCoordinates(lineWithCommentsRemoved);
                // const ijkr = extractIJKR(lineWithCommentsRemoved);
                const ijkr = extractAndCheckIJKR.run(lineWithCommentsRemoved, oldCoords, modals.G00);
                if (newCoords !== null) {
                    chainOfCoordinates.push({ coord: newCoords, ijkr: ijkr, g: modals.G00 });
                    updateChainOfCoordinatesDispay(); //moved here from the end of the main function to update after each movement
                }
            }
            ;
            console.log(" - E N D  O F  M O V E M E N T  P R O C E S S I N G ! - ");
            console.log("--CC--HH--AA--II--NN-- OO--FF-- CC--OO--RR--DD--II--NN--AA--TT--EE--SS-- : ", chainOfCoordinates);
        }
        ;
        // const isMovementOk = checkForMovement(lineWithCommentsRemoved, index);
        // if(!isMovementOk) return;
        return; ///STOP PROCESSING HERE TEMPORARILY FOR TESTING OTHER MODULE //////
        // check for G41/G42 line and process it here
        // SPECIAL LINE PROCESSING
        const dealWithG41_G42 = DealWithG41_G42.run(lineWithCommentsRemoved);
        if (dealWithG41_G42)
            return;
        return; ///STOP PROCESSING HERE TEMPORARILY FOR TESTING OTHER MODULE //////
        const SF_CommnadsPrevalidation = FS_CommnadsPrevalidation(lineWithCommentsRemoved);
        if (!SF_CommnadsPrevalidation)
            return;
    });
    const lastCrd = chainOfCoordinates.length - 1;
    const lastCoordinate = chainOfCoordinates[lastCrd].coord;
    updateSpindlePosition(lastCoordinate);
    displaySpindlePositionCoords();
    updateActiveBase();
    //updateChainOfCoordinatesDispay();
    console.log(modals);
}
//# sourceMappingURL=gcodeRunner.js.map