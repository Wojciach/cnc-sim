import { modals, necessaryModals } from "./modals.js";
import { modalAlarmsAndExplanations } from "./modalAlarmsAndExplanations.js";
// Function to check if all necessary modals are set
const areNecessaryModalsSet = () => {
    return necessaryModals.every(key => modals[key] !== null);
};
// areNecessaryModalsSet();
export function displayAlarmsForNecessaryModals() {
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
}
//# sourceMappingURL=displayAlarmsForNecessaryModals.js.map