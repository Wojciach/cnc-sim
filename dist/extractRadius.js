export class ExtractRadius {
    static getRadius(coord) {
        if (this.checkForIJKvsRConflict(coord) && this.atLeastOneValueBigEnough(coord)) {
            return (coord.r > 0.0001) ? coord.r : this.getRadiusFromIJK(coord);
        }
        else {
            console.log(" - R A D I U S  E X T R A C T I O N  F A I L E D . - ");
            return 0;
        }
    }
    static getRadiusFromIJK(coord) {
        const i = coord.i;
        const j = coord.j;
        const k = coord.k;
        if (k !== 0) {
            console.log(" - E R R O R :  C U R V E  I N  3 D  N O T  S U P P O R T E D ! Please leave k parameter as 0 - ");
            return 0;
        }
        return Math.sqrt(i * i + j * j).toFixed(4);
    }
    static checkForIJKvsRConflict(coord) {
        const ijkCheck = (Math.abs(coord.i) > 0.0001 || Math.abs(coord.j) > 0.0001 || Math.abs(coord.k) > 0.0001);
        const rCheck = (coord.r > 0.0001);
        if (ijkCheck && rCheck) {
            console.log(" - E R R O R :  C A N N O T  H A V E  B O T H  I J K  A N D  R  V A L U E S  I N  T H E  S A M E  L I N E ! - ");
            return false;
        }
        else {
            return true;
        }
    }
    static atLeastOneValueBigEnough(coord) {
        if (Math.abs(coord.i) > 0.0001 ||
            Math.abs(coord.j) > 0.0001 ||
            Math.abs(coord.k) > 0.0001 ||
            Math.abs(coord.r) > 0.0001) {
            return true;
        }
        else {
            console.log(" - E R R O R :  I J K or R  V A L U E S  I S  S E T  T O O  L O W ! - ");
            return false;
        }
        ;
    }
}
//# sourceMappingURL=extractRadius.js.map