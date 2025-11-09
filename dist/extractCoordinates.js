import { chainOfCoordinates } from "./chainOfCoordinates.js";
export function extractCoordinates(line) {
    const lastCoords = chainOfCoordinates[chainOfCoordinates.length - 1];
    let coordinates = {
        x: lastCoords.coord.x,
        y: lastCoords.coord.y,
        z: lastCoords.coord.z
    };
    const coordMovementMatch = line.match(/\b[XYZ]-?\d+\.?\d*\b/ig);
    if (coordMovementMatch !== null && coordMovementMatch.length > 0) {
        console.log(" - P R O P E R  C O O R D I N A T E S  F O U N D  I N  L I N E ! - ");
    }
    else {
        console.log(` - E R R O R :  I N V A L I D  O R  M I S S I N G  C O O R D I N A T E S  I N  L I N E  ! - please provide proper X, Y, Z coordinates along with movement command.`);
        return null;
    }
    var cords = Object.keys(coordinates);
    cords.forEach((cord) => {
        const regEx = new RegExp(`${cord}(-?\\d+\\.?\\d*)`, `ig`);
        const c = [...line.matchAll(regEx)]; //getting digits values for this cord
        if (c.length === 0) {
            console.log("### no value number for " + cord);
            return; // No matches found, skip this cord
        }
        else if (c.length > 0) {
            const lastMatch = c[c.length - 1]; // in case there are more than one coordinate for this cord in line, take the last one
            const valueString = lastMatch[1] || 0;
            const valueNumber = Number(valueString);
            coordinates[cord] = valueNumber;
        }
        if (c.length > 1) {
            console.log(` - there is more than one ${cord} coordinate in the line, ONLY THE LAST ONE  WILL be applied, please try not to use more than one coordinate in a line! - `);
        }
    });
    console.log("--CC--OO--RR--DD--II--NN--AA--TT--EE--SS-- : ", coordinates);
    return coordinates;
}
//# sourceMappingURL=extractCoordinates.js.map