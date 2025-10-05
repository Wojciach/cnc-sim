import { feedAndSpeed } from "./modals.js";
export function checkForFS(line) {
    //checking if the comand is one of S or F commnands
    //at this point the command should be laready validated by FS_CommnadsPrevalidation function in gcodeRunner.ts file
    const patternF = /\bF\s*(\d+\.?\d*)\b/i;
    const match = line.match(patternF);
    if (match) {
        console.log(match);
        console.log(" - F COMMAND DETECTED !!! - ");
        console.log("Full match:", match[0]); // "F111"
        console.log("Captured number:", match[1]); // "111"
        if (match[1]) {
            feedAndSpeed.F = Number(parseFloat(match[1]));
            console.log(" - F VALUE SET TO: ", feedAndSpeed.F, " - ");
            document.getElementById('id-F').textContent = feedAndSpeed.F.toString();
        }
    }
    return false;
}
//# sourceMappingURL=checkForFS.js.map