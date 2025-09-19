//     function extractCodeFromOneLine(line: string): void {

//     firstCommandCodes?.forEach(modalCommand => {
//       Object.keys(possibleModalValues).forEach(possibleModalValueKey => {
//         //const modalKey = possibleModalValueKey as keyof Modals;
//         //const validValues = possibleModalValues[modalKey];
//         const allPossibleValuesInThisModalType = possibleModalValues[possibleModalValueKey as keyof typeof possibleModalValues]
//         if(!(allPossibleValuesInThisModalType).some( oneOfGcodeFromThisType => oneOfGcodeFromThisType === modalCommand)) {return;}
//         allPossibleValuesInThisModalType.forEach(value => {
//           const parentDiv = document.getElementById('id-' + possibleModalValueKey)!;
//           parentDiv.querySelector('#spec-val-' + value)?.classList.remove('inActiveModal');
//           parentDiv.querySelector('#spec-val-' + value)?.classList.remove('activeModal');
//           if (value === modalCommand) {
//             console.log("MATCH FOUND: ", value, " in modal type ", possibleModalValueKey);
//             parentDiv.querySelector('#spec-val-' + value)?.classList.add('activeModal');
//             const modalKey = possibleModalValueKey as keyof Modals;
//             setModalIfValid(modalKey, (modalCommand));
//           } else {
//             parentDiv.querySelector('#spec-val-' + value)?.classList.add('inActiveModal');
//           }
//         }) 
//       })
//     })
// }