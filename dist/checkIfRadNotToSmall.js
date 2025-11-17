export function checkIfRadNotToSmall(previousCoord, currentCoord, radius) {
    const theDifferenceX = previousCoord.x - currentCoord.x;
    const theDifferenceY = previousCoord.y - currentCoord.y;
    const theDistance = Math.sqrt(theDifferenceX * theDifferenceX + theDifferenceY * theDifferenceY);
    if ((radius * 2) >= theDistance) {
        console.log(" - RAD_SIZE_OK- ");
        console.log(" - D I S T A N C E  B E T W E E N  P O I N T S : ", theDistance);
        console.log(" - RADIUSSSS : ", radius);
        return true;
    }
    else {
        console.log(" - E R R O R :  R A D I U S  T O O  S M A L L  F O R  C U R R E N T  P O S I T I O N  C H A N G E ! - ");
        console.log(" - D I S T A N C E  B E T W E E N  P O I N T S : ", theDistance);
        console.log(" - RADIUSSSS : ", radius);
        return false;
    }
}
//# sourceMappingURL=checkIfRadNotToSmall.js.map