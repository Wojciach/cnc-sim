import type { Modals } from "./modals.js";
import { possibleModalValues } from './modals.js';

export const addDefaultModals = (element: HTMLElement): void => {
    console.log("MODALS:", possibleModalValues);
    console.log("ELEMENT:", element);

    Object.keys(possibleModalValues).forEach(key => {
        const typedKey = key as keyof typeof possibleModalValues;
        const value = possibleModalValues[typedKey]; // Now type-safe

        const divG = document.createElement('div');
        divG.id = "id-" + key;
        divG.className = "modal-function-G";
        // Add opening bracket as text node
        divG.appendChild(document.createTextNode("[ "));

        // Filter out null values
        const validValues = value ? value.filter(modalValue => modalValue !== null) : [];
        

        validValues.forEach(( modalValue, index ) => {

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