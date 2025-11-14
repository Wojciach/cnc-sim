import type { fullCoordInfo } from "./chainOfCoordinates.js";

export class ExtractRadius {
    public static getRadius(coord: fullCoordInfo) {
        if (this.checkForIJKvsRConflict(coord) && this.atLeastOneValueBigEnough(coord)) {
            return (coord.ijkr.r > 0.0001) ? coord.ijkr.r : this.getRadiusFromIJK(coord);
        } else {
            console.log(" - R A D I U S  E X T R A C T I O N  F A I L E D . - ");
            return 0;
        }
    }

    private static getRadiusFromIJK(coord: fullCoordInfo): number {
      const i = coord.ijkr.i;
      const j = coord.ijkr.j;
      const k = coord.ijkr.k;
    
      if (k !== 0) {
        console.log(" - E R R O R :  C U R V E  I N  3 D  N O T  S U P P O R T E D ! Please leave k parameter as 0 - ");
        return 0;
      }
    
      return Math.sqrt(i * i + j * j).toFixed(4) as unknown as number
    
    }

    private static checkForIJKvsRConflict(coord: fullCoordInfo): boolean {
        const ijkCheck: boolean = (Math.abs(coord.ijkr.i) > 0.0001 || Math.abs(coord.ijkr.j) > 0.0001 || Math.abs(coord.ijkr.k) > 0.0001);
        const rCheck: boolean = (coord.ijkr.r > 0.0001);

        if (ijkCheck && rCheck) {
            console.log(" - E R R O R :  C A N N O T  H A V E  B O T H  I J K  A N D  R  V A L U E S  I N  T H E  S A M E  L I N E ! - ");
            return false;
        } else {
            return true;
        }
    }

    private static atLeastOneValueBigEnough(coord: fullCoordInfo): boolean {
        if (
            Math.abs(coord.ijkr.i) < 0.0001 ||
            Math.abs(coord.ijkr.j) < 0.0001 ||
            Math.abs(coord.ijkr.k) < 0.0001 ||
            Math.abs(coord.ijkr.r) < 0.0001 
        ) { return true } else {
            console.log(" - E R R O R :  I J K or R  V A L U E S  I S  S E T  T O O  L O W ! - ");
            return false
        };
    }
}