import { workCoordinateSystems } from "./modals.js";
export function checkForG10(line) {
    // Basic validation for G10 line structure
    if (line.match(/(G10)/ig) === null) {
        // console.log(" - G10  L I N E  N O T  D E T E C T E D ! - ");
        return false;
    }
    else if (((line.match(/(G)/ig)?.length || [].length) > 1)) {
        console.log(" - in G10 line it is recommend to use no more than one 'G' code - ");
        return false;
    }
    else if (((line.match(/(M)/ig)?.length ?? [].length) > 0)) {
        console.log(" - please do not use 'M' codes in the same line with G10 command - ");
        return false;
    }
    else if (((line.match(/(S)/ig)?.length ?? [].length) > 0)) {
        console.log(" - please do not use 'S' parameter in the same line with G10 command - ");
        return false;
    }
    else if (((line.match(/(T)/ig)?.length ?? [].length) > 0)) {
        console.log(" - please do not use 'T' parameter in the same line with G10 command - ");
        return false;
    }
    else if (((line.match(/(H)/ig)?.length ?? [].length) > 0)) {
        console.log(" - please do not use 'H' parameter in the same line with G10 command - ");
        return false;
    }
    else if (((line.match(/(F)/ig)?.length ?? [].length) > 0)) {
        console.log(" - please do not use 'F' parameter in the same line with G10 command - ");
        return false;
    }
    else if (((line.match(/(X)/ig)?.length ?? [].length) > 1)) {
        console.log(" - please do not use more than one 'X' parameter in G10 line - ");
        return false;
    }
    else if (((line.match(/(Y)/ig)?.length ?? [].length) > 1)) {
        console.log(" - please do not use more than one 'Y' parameter in G10 line - ");
        return false;
    }
    else if (((line.match(/(Z)/ig)?.length ?? [].length) > 1)) {
        console.log(" - please do not use more than one 'Z' parameter in G10 line - ");
        return false;
    }
    else if (((line.match(/(^GLPXYZ)/ig)?.length ?? [].length) > 1)) {
        console.log(" - you have used some letters that are not allowed in G10 line. \n The onnly letters asllowed in this line are: G L P X Y Z - ");
        return false;
    }
    else if (((line.match(/(L10)/ig)?.length ?? [].length) < 1)) {
        console.log(" - this version of the app in G10 line work only with L10 parameter for setting Work Coordinate System. In your line this parameter is missing - ");
        return false;
    }
    else if (((line.match(/(L)/ig)?.length ?? [].length) > 1)) {
        console.log(" - error: you used more than one L parameter in a line - ");
        return false;
    }
    else if (((line.match(/(P\s*0?[1-6])/ig)?.length ?? [].length) < 1)) {
        console.log(" - this version of the app in G10 line work only with P parameter value between 1 and 6 for choosing which Work Coordinate System you want to edit. In your line this (P) parameter is incorrect or missing. Correct paremeter would be: P1, P4, P01, P04 etc - ");
        return false;
    }
    else if (((line.match(/(P)/ig)?.length ?? [].length) > 1)) {
        console.log(" - error: you used more than one P parameter in a line - ");
        return false;
    }
    else if (((line.match(/\b([XYZ]\s*-?\d*\.?\d+)(?=\s|$)/ig))?.length ?? [].length) < 1) {
        console.log(" - error: coordinate parameter is missing. \n In G10 line you need to use at least one of X Y Z coordinate with a proper numerical value - ");
        return false;
    }
    else {
        console.log(" - G10  L I N E  D E T E C T E D  A N D  P A R A M E T E R S  S E E M  T O  B E  O K ! - ");
    }
    // Extracting and processing parameters
    const L10_detection = line.match(/\bL10\b/ig);
    if (!L10_detection) {
        console.log("No L10 command found in this line. for now G10 codes work only for L10 and P1-P6 (P1 as G54, P6 as G59)");
        return false;
    }
    const P_detection = line.match(/\bP\s*0?([1-6])\b/i);
    console.log(P_detection);
    if (!P_detection) {
        console.log("No valid P command found in this line. for now G10 codes work only for L10 and P1-P6 P1 as G54, P6 as G59)");
        return false;
    }
    if (L10_detection && P_detection) {
        const num = Number(P_detection[1]) + 53; // Extract the number part from the match
        const G = 'G' + num;
        const curentWCS = workCoordinateSystems[G];
        const x = Number(line.match(/X([+-]?\d*\.?\d*)/i)?.[1]) || curentWCS.x;
        const y = Number(line.match(/Y([+-]?\d*\.?\d*)/i)?.[1]) || curentWCS.y;
        const z = Number(line.match(/Z([+-]?\d*\.?\d*)/i)?.[1]) || curentWCS.z;
        workCoordinateSystems[G] = { x: x, y: y, z: z }; // Resetting to zero for demonstration
        return true;
    }
    else {
        console.log("Something went wrong with detecting L10 or P parameters.");
        return false;
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
//# sourceMappingURL=checkForG10.js.map