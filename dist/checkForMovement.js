import { modals } from "./modals.js";
import { applyG0123 } from "./applyG0123.js";
import { applyMovement } from "./applyMovement.js";
import { extractCoordinates } from "./extractCoordinates.js";
//the whole line is passed to this function, not only single command
export function checkForMovement(line, index) {
    if ((/[XYZ]/ig.test(line))) {
        console.log(" - M O V E M E N T   D E T E C T E D ! - ");
    }
    else {
        console.log(" - M O V E M E N T -N-O-T-  D E T E C T E D ! (so movement check passed) - ");
        return true; //no movement detected is also ok
    }
    extractCoordinates(line);
    // check for proper coordinates
    const coordMovementMatch = line.match(/[XYZ]-?\d+\.?\d*/ig);
    if (coordMovementMatch !== null && coordMovementMatch.length > 1) {
        console.log(" - P R O P E R  C O O R D I N A T E S  F O U N D  I N  L I N E ! - ");
    }
    else {
        console.log(` - E R R O R :  I N V A L I D  O R  M I S S I N G  C O O R D I N A T E S  I N  L I N E ${index + 1} ! - please provide proper X, Y, Z coordinates along with movement command.`);
        return false;
    }
    // check for G00/G01/G02/G03 presence in line or modal active
    const matchForG00 = line.match(/(G00|G01|G02|G03)/ig);
    if (matchForG00 === null) {
        console.log('no match for G00/G01/G02/G03 found in movement line so checking for modal G00/G01/G02/G03 active from previous lines');
        if (modals.G00 === null) {
            console.log(` - E R R O R :  modal -N-O-T- active and -N-O- G00/G01/G02/G03 present in this line.`);
            return false;
        }
        else {
            console.log(" - M O V E M E N T  C O M M A N D  A L R E A D Y  A C T I V E  ! - (no further checks needed because if G00/G01/G02/G03 are active and they have been validated) ");
            applyMovement(coordMovementMatch[0]);
            return true;
        }
    }
    else if (matchForG00.length > 1) {
        console.log(` - E R R O R :  M O R E  T H A N  O N E  M O V E M E N T  C O M M A N D  F O U N D  I N  L I N E ${index + 1} ! - please use only one movement command G00, G01, G02 or G03 per line.`);
        return false;
    }
    else if (matchForG00.length === 1) {
        console.log(" - M O V E M E N T  C O M M A N D  F O U N D  I N  T H I S  L I N E  (along with proper coords)! - ");
        if (applyG0123(matchForG00[0])) {
            console.log(" - M O V E M E N T  C O M M A N D  A P P L I E D ! - ");
            applyMovement(coordMovementMatch[0]);
            return true;
        }
        else {
            console.log(" - E R R O R :  M O V E M E N T  C O M M A N D  N O T  A P P L I E D ! - ");
            return false;
        }
    }
    else {
        console.log(" - E R R O R :  U N E X P E C T E D  E R R O R  I N  M O V E M E N T  C H E C K ! - ");
        return false;
    }
}
//# sourceMappingURL=checkForMovement.js.map