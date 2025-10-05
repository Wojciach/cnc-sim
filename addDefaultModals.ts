import { possibleModalValues } from './modals.js';

// Function to dynamically create and add modal elements to a given HTML element (visual representation of modals)
export const addDefaultModals = (element: HTMLElement): void => {
    console.log("Adding default modals to the HTML element:", element);
    Object.keys(possibleModalValues).forEach(key => {
        const typedKey = key as keyof typeof possibleModalValues;
        const value = possibleModalValues[typedKey]; // Now type-safe

        const divG = document.createElement('div');
        divG.id = "id-" + key;
        divG.className = "modal-function-G";
        // Add opening bracket as text node
        const extraNameExplanation = (/^[STDHF]$/i.test(typedKey)) ? `${typedKey}: ` : "";
        divG.appendChild(document.createTextNode(`${extraNameExplanation}[ `));

        // Filter out null values
        // const validValues = value ? value.filter(modalValue => modalValue !== null) : [];
        const validValues = Array.isArray(value) ? value.filter(modalValue => modalValue !== null) 
  : [];
        

        validValues.forEach(( modalValue: string | number, index: number ) => {

            const span = document.createElement('span');
            span.id = "spec-val-" + modalValue;
            span.className = "modal-function-G-specific";
            span.textContent = modalValue as string;
            divG.appendChild(span);

                        // Add comma after each span except the last one
            if (index < validValues.length - 1) {
                divG.appendChild(document.createTextNode(", "));
            }

        });

        divG.appendChild(document.createTextNode(" ]"));
        element.appendChild(divG);
    });
}