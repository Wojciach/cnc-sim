import { workCoordinateSystems } from "./modals.js";

export function checkForG10(line: string): void {

    if (line.match(/(G10)/i) === null) {

        console.log(line);
        console.log(line.match(/(G10)/i));
        console.log(" - G10  L I N E  N O T  D E T E C T E D ! - ");
        return;
        
    } else if (((line.match(/(G)/ig)?.length || [].length ) > 1) ) {

        console.log(" - in G10 line it is recommend to use no more than one 'G' code - ");
        return;

    } else if (((line.match(/(M)/i)?.length ?? [].length ) > 0) ) {

        console.log(" - please do not use 'M' codes in the same line with G10 command - ");
        return;

    } else if (((line.match(/(L10)/i)?.length ?? [].length ) < 1) ) {
        
        console.log(" - this version of the app in G10 line work only with L10 parameter for setting Work Coordinate System. In your line this parameter is missing - ");
        return;

    } else if (((line.match(/(L)/i)?.length ?? [].length ) > 1) ) {
        
        console.log(" - error: you used more than one L parameter in a line - ");
        return;

    } else if (((line.match(/(P\s*0?[1-6])/i)?.length ?? [].length ) < 1) ) {

        console.log(" - this version of the app in G10 line work only with P parameter between 1 and 6 for choosing which Work Coordinate System you want to edit. In your line this parameter is incorrect or missing. Correct paremeter would be: P1, P4, P01, P04 etc - ");
        return;

    } else if (((line.match(/(P\s*0?[1-6])/i)?.length ?? [].length ) > 1) ) {

        console.log(" - error: you used more than one P parameter in a line - ");
        return;

    }
    
    const matchG10Line = line.match(/(G10)\s*(L\d+)\s*(P\d+)(?=.*[XYZ])(?:\s*(X[+-]?\d*\.?\d*))?(?:\s*(Y[+-]?\d*\.?\d*))?(?:\s*(Z[+-]?\d*\.?\d*))?(?:\s*;.*)?$/i)
    console.log(" - M A T C H - G10 - L I N E: - ", matchG10Line);
    if (!matchG10Line) {
        console.log("G10 line is incorrect or missing required parameters.");
        return;
    }

    const L10_detection = line.match(/\bL10\b/i)
    if (!L10_detection) {
        console.log("No L10 command found in this line. for now G10 codes work only for L10 and P1-P6 (P1 as G54, P6 as G59)");
        return;
    }

    const P_detection = line.match(/\bP\s*0?([1-6])\d*\b/i)
        if (!P_detection) {
        console.log("No valid P command found in this line. for now G10 codes work only for L10 and P1-P6 P1 as G54, P6 as G59)");
        return;
    }

    if (L10_detection && P_detection) {
        const num = Number(P_detection[1])! + 53; // Extract the number part from the match
        const G = 'G' + num;
        const x = Number(line.match(/X([+-]?\d*\.?\d*)/i)?.[1]) || 0;
        const y = Number(line.match(/Y([+-]?\d*\.?\d*)/i)?.[1]) || 0;
        const z = Number(line.match(/Z([+-]?\d*\.?\d*)/i)?.[1]) || 0;
        workCoordinateSystems[G as keyof typeof workCoordinateSystems] = {x: x, y: y, z: z}; // Resetting to zero for demonstration
    }
}

// L Parameter - Mode Selector
// The L number specifies what type of offset you're setting:

// Common L values:
// L1 - Set tool length offset
// L2 - Set tool length wear offset
// L10 - Set work coordinate system (G54-G59)
// L11 - Set work coordinate system (G54.1 P1-P300)
// L12 - Set tool diameter offset
// L13 - Set tool diameter wear offset
// L20 - Set work coordinate system for additional systems


// For tool offsets (L1, L2, L12, L13):
// P1 - Tool #1
// P2 - Tool #2
// P3 - Tool #3
// etc.

// For work coordinates (L10, L11, L20):
// P1 - G54
// P2 - G55
// P3 - G56
// P4 - G57
// P5 - G58
// P6 - G59
// P7 - G54.1 P1
// P8 - G54.1 P2
// etc.