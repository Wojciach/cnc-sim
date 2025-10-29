import { FS_checkAndRun } from "./FS_checkAndRun.js";
import { modals, possibleModalValues, setModalIfValid, type Modals } from "./modals.js";

export function singleCommandRunner(modalCommand: string): void {
    console.log(" - S I N G L E  C O M M A N D  R U N N E R  C A L L E D  W I T H : - ", modalCommand);

    //Chceck if the command is one of S of F and convert to number

    FS_checkAndRun(modalCommand);

    //checking if the command is in the possible modals list
    Object.keys(possibleModalValues).forEach(possibleModalValueKey => {
        const allPossibleValuesInThisModalType = possibleModalValues[possibleModalValueKey as keyof typeof possibleModalValues]

        // Type guard to ensure we're working with an array
        // in caske the command is F or S type the posible value wont be an array so for F S  case the comand is dealt with in FS_checkAndRun function above
        if (!Array.isArray(allPossibleValuesInThisModalType)) {
            console.log(" - S K I P P I N G  N O N - A R R A Y  M O D A L  T Y P E  C O M A N D : - ", allPossibleValuesInThisModalType);
            return;
        }

        // if there is no match in comand with possible comand from possible modal, skip to next possibleModalValueKey (do not anything)
        if(!(allPossibleValuesInThisModalType).some( oneOfGcodeFromThisType => oneOfGcodeFromThisType === modalCommand)) {
            console.log(typeof modalCommand);
            console.log(typeof allPossibleValuesInThisModalType[0]);
            console.log(allPossibleValuesInThisModalType);
            console.log(" - N O  M A T C H  F O R  M O D A L  C O M A N D : - ", modalCommand);
            return;
        }

        // values that are possible for this modal type and in line of comands that are being processed
        allPossibleValuesInThisModalType.forEach(value => {

            // claning up previous state in html display
            const parentDiv = document.getElementById('id-' + possibleModalValueKey)!;
            parentDiv.querySelector('#spec-val-' + value)?.classList.remove('inActiveModal');
            parentDiv.querySelector('#spec-val-' + value)?.classList.remove('activeModal');

            if (value === modalCommand) {
                // display which modals are active in display html    
                parentDiv.querySelector('#spec-val-' + value)?.classList.add('activeModal');
            
            const modalKey = possibleModalValueKey as keyof Modals;
            setModalIfValid(modalKey, (modalCommand));
            console.log('modals modals modals', modals);
            } else {
                parentDiv.querySelector('#spec-val-' + value)?.classList.add('inActiveModal');
            }
        }) 
    })
}