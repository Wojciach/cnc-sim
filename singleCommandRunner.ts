import { modals, possibleModalValues, setModalIfValid, type Modals } from "./modals.js";

export function singleModalCommandRunner(modalCommand: string): void {
    //checking if the command is in the possible modals list
    Object.keys(possibleModalValues).forEach(possibleModalValueKey => {
        const allPossibleValuesInThisModalType = possibleModalValues[possibleModalValueKey as keyof typeof possibleModalValues]

        // if there is no match in comand with possible comand from possible modal, skip to next possibleModalValueKey (do not anything)
        if(!(allPossibleValuesInThisModalType).some( oneOfGcodeFromThisType => oneOfGcodeFromThisType === modalCommand)) {return;}

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
            } else {
            parentDiv.querySelector('#spec-val-' + value)?.classList.add('inActiveModal');
            }
        }) 
    })
}