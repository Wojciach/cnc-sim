import { possibleModalValues } from './modals.js';
import { gCodeExplanation } from './gCodeExplanation.js';
// Function to dynamically create and add modal elements to a given HTML element (visual representation of modals)
export const addDefaultModals = (element) => {
    console.log("Adding default modals to the HTML element:", element);
    Object.keys(possibleModalValues).forEach(key => {
        const typedKey = key;
        const value = possibleModalValues[typedKey]; // Now type-safe
        const divG = document.createElement('div');
        divG.id = "id-" + typedKey;
        divG.className = "modal-function-G";
        if ((/^[STDHF]$/i.test(typedKey))) {
            divG.addEventListener('mouseenter', (x) => {
                //console.log("Mouse entered modal div:", typedKey, x.target);
                gCodeExplanation.on(x.target, typedKey);
                divG.addEventListener('mouseleave', gCodeExplanation.off);
            });
        }
        // Add opening bracket as text node
        const extraNameExplanation = (/^[STDHF]$/i.test(typedKey)) ? `${typedKey}: ` : "";
        const oppeningDescription = document.createTextNode(`${extraNameExplanation}[ `);
        // if((/^[STDHF]$/i.test(typedKey))) {
        //     console.log("Adding explanation listener for key:", typedKey, oppeningDescription);
        //     oppeningDescription.addEventListener('mouseenter', (x: Event) => {
        //         gCodeExplanation.on(x.target as HTMLElement, key);
        //     });
        //     oppeningDescription.addEventListener('mouseleave', gCodeExplanation.off);
        // }
        divG.appendChild(oppeningDescription);
        // Filter out null values
        // const validValues = value ? value.filter(modalValue => modalValue !== null) : [];
        const validValues = Array.isArray(value) ? value.filter(modalValue => modalValue !== null)
            : [];
        validValues.forEach((modalValue, index) => {
            const span = document.createElement('span');
            span.id = "spec-val-" + modalValue;
            span.className = "modal-function-G-specific";
            span.textContent = modalValue;
            if (!(/^[STDHF]$/i.test(typedKey))) {
                span.addEventListener('mouseenter', (x) => {
                    gCodeExplanation.on(x.target, modalValue);
                    span.addEventListener('mouseleave', gCodeExplanation.off);
                });
            }
            divG.appendChild(span);
            // Add comma after each span except the last one
            if (index < validValues.length - 1) {
                divG.appendChild(document.createTextNode(", "));
            }
        });
        divG.appendChild(document.createTextNode(" ]"));
        element.appendChild(divG);
    });
};
//# sourceMappingURL=addDefaultModals.js.map