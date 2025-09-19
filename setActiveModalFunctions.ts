import type { Modals } from "./modals.js";
import { addDefaultModals } from "./addDefaultModals.js";
import {spindlePositon, modals, workCoordinateSystems } from './modals.js';

export const setActiveModalFunctions = (element: HTMLElement): void => {
    const position = document.querySelector('#position');
    const xElement = position?.querySelector('#x');
    xElement!.textContent = spindlePositon.current.x.toString();
    const yElement = position?.querySelector('#y');
    yElement!.textContent = spindlePositon.current.y.toString();
    const zElement = position?.querySelector('#z');
    zElement!.textContent = spindlePositon.current.z.toString();

    const nextPosition = document.querySelector('#next-position');
    const xElement2 = nextPosition?.querySelector('#x');
    xElement2!.textContent = spindlePositon.next.x.toString();
    const yElement2 = nextPosition?.querySelector('#y');
    yElement2!.textContent = spindlePositon.next.y.toString();
    const zElement2 = nextPosition?.querySelector('#z');
    zElement2!.textContent = spindlePositon.next.z.toString();

    updateSpindlePosition();

}

export function updateActiveBase() {
    console.log("Updating active base position to: ", workCoordinateSystems);
    console.log("MODALS G54: ", modals.G54);

    const x = document.querySelector('#active-base-indicator #x');
    const y = document.querySelector('#active-base-indicator #y');
    const z = document.querySelector('#active-base-indicator #z');

    const activeBase = modals.G54;

    if(workCoordinateSystems && x && y && z && activeBase) {
        console.log('workCoordinateSystems[activeBase].toString()');
        console.log(workCoordinateSystems[activeBase].toString());
        x.textContent = workCoordinateSystems[activeBase].x.toString();
        y.textContent = workCoordinateSystems[activeBase].y.toString();
        z.textContent = workCoordinateSystems[activeBase].z.toString();
    }
}

export function updateSpindlePosition() {
    console.log("Updating active base position to: ", spindlePositon.current);
    const activeBase = document.getElementById('active-base');
    if(activeBase) {
        activeBase.setAttribute('cx', (200 + spindlePositon.current.x).toString());
        activeBase.setAttribute('cy', (200 - spindlePositon.current.y).toString());

        document.getElementById('g')!.textContent = modals.G54 ? modals.G54 : "none";
    }
}