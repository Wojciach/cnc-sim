import { addDefaultModals } from './addDefaultModals.js';
import { runGCode } from './gcodeRunner.js';
import { modals, createDefaultModals } from './modals.js';
import { displaySpindlePositionCoords } from "./setActiveModalFunctions.js";
class Website {
    constructor() {
        this.counterValue = 0;
        this.modals = modals;
        this.elements = {
            decrement: document.getElementById('decrement'),
            increment: document.getElementById('increment'),
            count: document.getElementById('count-value'),
            resetModals: document.getElementById('reset-modals'),
            modalFunctions: document.getElementById('modal-functions'),
            runGcode: document.getElementById('run-gcode'),
            gCodeInput: document.getElementById('gCodeString')
        };
        this.init();
    }
    startSimulation() {
        console.log('START SIMULATION - g-code running...');
        if (this.elements.gCodeInput) {
            runGCode(this.elements.gCodeInput.value);
        }
    }
    resetModals() {
        this.modals = createDefaultModals();
        console.log('Modals reset to default:', this.modals);
    }
    init() {
        this.setupEventListeners();
        this.setupNavbar();
        addDefaultModals(this.elements.modalFunctions);
        displaySpindlePositionCoords();
    }
    setupEventListeners() {
        // Setup counter buttons
        if (this.elements.decrement) {
            this.elements.decrement.addEventListener('click', () => this.updateCounter(-1));
        }
        if (this.elements.increment) {
            this.elements.increment.addEventListener('click', () => this.updateCounter(1));
        }
        if (this.elements.resetModals) {
            this.elements.resetModals.addEventListener('click', this.resetModals);
        }
        // CTA button event
        const ctaButton = document.getElementById('cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                alert('Thanks for getting started with our website!');
            });
        }
        // run g-code button event
        // const gCodeButton = document.getElementById('run-gcode');
        if (this.elements.runGcode) {
            this.elements.runGcode.addEventListener('click', () => this.startSimulation());
        }
        //Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                // Your code here
                console.log('Enter key was pressed!');
                this.startSimulation();
            }
        });
    }
    updateCounter(change) {
        console.log(`Counter changed by: ${change}`);
        this.counterValue += change;
        if (this.elements.count) {
            this.elements.count.textContent = this.counterValue.toString();
            // Add animation effect
            this.elements.count.classList.add('pop');
            setTimeout(() => {
                if (this.elements.count) {
                    this.elements.count.classList.remove('pop');
                }
            }, 300);
        }
    }
    setupNavbar() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        if (burger && nav) {
            burger.addEventListener('click', () => {
                nav.classList.toggle('nav-active');
                // Burger animation
                burger.classList.toggle('toggle');
            });
        }
    }
}
// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Website();
});
//# sourceMappingURL=script.js.map