import { updateActiveBase, updateSpindlePosition } from "./setActiveModalFunctions.js";
import { singleCommandRunner } from "./singleCommandRunner.js";
import { checkForG10 } from "./checkForG10.js";

export function runGCode(gCodeString: string): void {
    const allLines = gCodeString.split(";");
    allLines.forEach((line, index) => {
        const lineNoWhiteChars = line.replace(/\s/g, '');
        const commandCodes = lineNoWhiteChars.match(/[MG]\d{1,2}/ig);
        commandCodes?.forEach(command => {
            singleCommandRunner(command);
        });
        checkForG10(line);

    });
    updateSpindlePosition();
    updateActiveBase();
}
