import { modals, necessaryModals } from "./modals.js";
import { modalAlarmsAndExplanations } from "./modalAlarmsAndExplanations.js";
import { displayAlarmsForNecessaryModals } from "./displayAlarmsForNecessaryModals.js";
export function lineValidation(line) {
    const howManyG = (line.match(/G[0,1,2,3]/ig) || []).length;
    console.log(" - H O W  M A N Y  M O V E M E N T  G  C O D E S  I N  L I N E: - ", howManyG);
    if (howManyG > 1) {
        console.log(" - E R R O R :  M O R E  T H A N  O N E  M O V E M E N T   G   C O D E  I N  L I N E ! - ");
        return false;
    }
    const ifSpindleStoped = modals.M03 === null || modals.M03 === 'M05';
    const feedMovement = (line.match(/G0?[123]\b/ig) || []).length > 0;
    console.log(" - I F  S P I N D L E  S T O P E D : - ", ifSpindleStoped);
    console.log(" - I F  F E E D  M O V E M E N T : - ", feedMovement);
    if (feedMovement) {
        displayAlarmsForNecessaryModals();
    }
    if (ifSpindleStoped && feedMovement) {
        console.log(" - E R R O R :  Feed movement started with spindle stoped !");
        return false;
    }
    return true;
}
//# sourceMappingURL=lineVlidation.js.map