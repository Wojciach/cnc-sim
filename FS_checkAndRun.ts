import { feedAndSpeed } from "./modals.js";

export function FS_checkAndRun(line: string): boolean {
    //checking if the comand is one of S or F commnands
    //at this point the command should be laready validated by FS_CommnadsPrevalidation function in gcodeRunner.ts file
    const pattern = /\b[FS]\s*(\d+\.?\d*)\b/i;
    const match = line.match(pattern);
    const matchedLetter = match ? match[0].charAt(0).toUpperCase() : null;
    if (matchedLetter !== 'S' && matchedLetter !== 'F') {
        console.log(" - WRONG  S  O R  F   C O M M A N D (wrong letter match whille interpreting SF command) ! - ");
        return false;
    }

    if (match && (matchedLetter === 'S' || matchedLetter === 'F')) {
        if (match[1]) {
            feedAndSpeed[matchedLetter] = Number(parseFloat(match[1]));
            document.getElementById(`id-${matchedLetter}`)!.textContent = `${matchedLetter}: ` + feedAndSpeed[matchedLetter].toString();
        }
    }

    return false;
}