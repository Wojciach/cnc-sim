import { updateActiveBase, updateSpindlePosition } from "./setActiveModalFunctions.js";
import { singleCommandRunner } from "./singleCommandRunner.js";
import { checkForG10 } from "./checkForG10.js";
import { checkForG43 } from "./checkForG43.js";
import { checkForG41_G42 } from "./checkForG41_G42.js";
import { DealWithG41_G42 } from "./dealWithG41_G42.js";
import { lineValidation } from "./lineVlidation.js";
import { modals, workCoordinateSystems } from "./modals.js";
import { FS_CommnadsPrevalidation } from "./FS_CommandsPrevalidation.js";
import { checkForMovement } from "./checkForMovement.js";
import { generalSyntaxCheck } from "./generalSyntaxCheck.js";
import { runAutonomusModals } from "./runAutonomusModals.js";
import { checkForNecessaryModals } from "./checkForNecessaryModals.js";
import { DealWithMovement } from "./dealWithMovement.js";
import { CheckNecessaryModalsForMovement } from "./checkNecessaryModalsForMovement.js";
import { chainOfCoordinates } from "./chainOfCoordinates.js";
import { extractCoordinates } from "./extractCoordinates.js";
//import { checkForSpidneRepositionLines } from "./checkForSpidneRepositionLines.js";

export function runGCode(gCodeString: string): void {
    const allLines = gCodeString.split(";");
    allLines.forEach((line, index) => {
        const lineWithCommentsRemoved = line.replace(/\([^]*\)/g, '');
        
        //
        // pre validation some of the commands in the line
        //
        const generalSyntaxCheckResult: boolean = generalSyntaxCheck(lineWithCommentsRemoved, index);
        if(!generalSyntaxCheckResult) return;

        const G10_Detetced: boolean = checkForG10(lineWithCommentsRemoved);
        if(G10_Detetced) return;

        const pattern = /\b[MG]\d{1,2}\b|\b[XYZ]\s*[-+]?\d+\.?\d*\b|\b[FS]\s*\d+\.?\d*\b|\b[HTD]\s*\d{1,2}\b/gi;
        const commandCodesOfThisLine = lineWithCommentsRemoved.match(pattern) || [];
        console.log(" - C O M M A N D S  I N  L I N E : - ", commandCodesOfThisLine);
        commandCodesOfThisLine.forEach(command => {
            singleCommandRunner(command);
        });

        const movementDetected = DealWithMovement.run(lineWithCommentsRemoved);
        if(movementDetected) {
            if (CheckNecessaryModalsForMovement.run(lineWithCommentsRemoved)) {
                console.log(" - M O V E M E N T  P R O C E S S I N G  A P P R O V E D ! - ");
                const newCoords = extractCoordinates(lineWithCommentsRemoved);
                if(newCoords !== null) {
                    chainOfCoordinates.push({coord: newCoords, ijkr: {i: 0, j: 0, k: 0, r: 0}, g: modals.G00});
                }
            };
            console.log(" - E N D  O F  M O V E M E N T  P R O C E S S I N G ! - ");
            console.log("--CC--HH--AA--II--NN-- OO--FF-- CC--OO--RR--DD--II--NN--AA--TT--EE--SS-- : ", chainOfCoordinates);
        };

        // const isMovementOk = checkForMovement(lineWithCommentsRemoved, index);
        // if(!isMovementOk) return;

        return; ///STOP PROCESSING HERE TEMPORARILY FOR TESTING OTHER MODULE //////

 

        // check for G41/G42 line and process it here
        // SPECIAL LINE PROCESSING
        const dealWithG41_G42 = DealWithG41_G42.run(lineWithCommentsRemoved);
        if(dealWithG41_G42) return;

        return; ///STOP PROCESSING HERE TEMPORARILY FOR TESTING OTHER MODULE //////

        const SF_CommnadsPrevalidation = FS_CommnadsPrevalidation(lineWithCommentsRemoved);
        if(!SF_CommnadsPrevalidation) return;

        

        

    });
    updateSpindlePosition();
    updateActiveBase();
    console.log(modals);
    console.log(workCoordinateSystems);
}
