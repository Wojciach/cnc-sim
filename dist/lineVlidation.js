import { modals, necessaryModals } from "./modals.js";
import { modalAlarmsAndExplanations } from "./modalAlarmsAndExplanations.js";
export function lineValidation(line) {
    const howManyG = (line.match(/G[0,1,2,3]/ig) || []).length;
    console.log(" - H O W  M A N Y  G  C O D E S  I N  L I N E: - ", howManyG);
    if (howManyG > 1) {
        console.log(" - E R R O R :  M O R E  T H A N  O N E  M O V E M E N T   G   C O D E  I N  L I N E ! - ");
        return false;
    }
    const ifSpindleStoped = modals.M3 === null || modals.M3 === 'M5';
    const feedMovement = (line.match(/G[1,2,3]/ig) || []).length > 0;
    console.log(" - I F  S P I N D L E  S T O P E D : - ", ifSpindleStoped);
    console.log(" - I F  F E E D  M O V E M E N T : - ", feedMovement);
    if (ifSpindleStoped && feedMovement) {
        console.log(" - E R R O R :  Feed started with spindle stoped !");
        return false;
    }
    // Function to check if all necessary modals are set
    const areNecessaryModalsSet = () => {
        return necessaryModals.every(key => modals[key] !== null);
    };
    areNecessaryModalsSet();
    if (!areNecessaryModalsSet()) {
        console.log(" - E R R O R :  N E C E S S A R Y  M O D A L S  A R E  N O T  S E T ! - ");
        necessaryModals.forEach(key => {
            if (modals[key] === null) {
                console.log(` - M I S S I N G  M O D A L :  ${key} ! - `);
                console.log(` - ------- -   ${modalAlarmsAndExplanations[key]} ! - `);
            }
        });
    }
    ;
    return true;
}
//# sourceMappingURL=lineVlidation.js.map