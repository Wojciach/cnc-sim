import type { ijkr } from "./chainOfCoordinates.js";

export function extractIJKR(line: string): ijkr {

    let ijkrValues: { i: number; j: number; k: number; r: number } = { i: 0, j: 0, k: 0, r: 0 };

    const rPattern = /\b[R]-?\d+\.?\d*\b/gi;
    const ijkPattern = /\b[IJK]-?\d+\.?\d*\b/gi;

    const rMatches = line.match(rPattern) ?? [];
    const ijkMatches = line.match(ijkPattern) ?? [];

    if (rMatches.length > 0 && ijkMatches.length > 0) {
        console.log(" - E R R O R :  C A N N O T  H A V E  B O T H  I J K  A N D  R  V A L U E S  I N  T H E  S A M E  L I N E ! - ");
        return ijkrValues;
    }

    if (rMatches!.length > 1) {
        console.log(" - E R R O R :  D U P L I C A T E  R  V A L U E S  D E T E C T E D  I N  L I N E ! - ");
        return ijkrValues;
    } else if (rMatches?.length === 1) {
        const rValueString = rMatches[0].substring(1).trim();
        ijkrValues.r = Number(parseFloat(rValueString));
        console.log(" - R  V A L U E  E X T R A C T E D  : ", ijkrValues.r);
        return ijkrValues;
    } else if (rMatches!.length < 1) {
        console.log(" - N O  R  V A L U E  D E T E C T E D  I N  L I N E . - ");
    }

    ijkMatches?.forEach((match) => {
        const axis = match.charAt(0).toUpperCase();
        const valueString = match.substring(1).trim();
        const valueNumber = Number(parseFloat(valueString));
        ijkrValues[axis.toLowerCase() as keyof ijkr] = valueNumber;
        console.log(` - ${axis}  V A L U E  E X T R A C T E D  : `, valueNumber);
    })

    return ijkrValues;
}