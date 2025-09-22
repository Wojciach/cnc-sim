import { modals, necessaryModals } from "./modals.js";
import { modalAlarmsAndExplanations } from "./modalAlarmsAndExplanations.js";

export function lineValidation(line: string): boolean {

    const howManyG = (line.match(/G[1,2,3,4]/ig) || []).length;
    console.log(" - H O W  M A N Y  G  C O D E S  I N  L I N E: - ", howManyG);
    if(howManyG > 1) {
        console.log(" - E R R O R :  M O R E  T H A N  O N E  G  C O D E  I N  L I N E ! - ");
        return false;
    }

    // Function to check if all necessary modals are set
    const  areNecessaryModalsSet = (): boolean => {
        return necessaryModals.every(key => modals[key] !== null);
    }
    areNecessaryModalsSet();

    if (!areNecessaryModalsSet()) {
        console.log(" - E R R O R :  N E C E S S A R Y  M O D A L S  A R E  N O T  S E T ! - ");
        necessaryModals.forEach(key => {
            if (modals[key] === null) {
                console.log(` - M I S S I N G  M O D A L :  ${key} ! - `);
                console.log(` - ------- -   ${modalAlarmsAndExplanations[key]} ! - `);
            }
        })
    };
    
    return true;
}