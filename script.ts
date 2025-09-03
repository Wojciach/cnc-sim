// script.ts - TypeScript source file
interface CounterElements {
    decrement: HTMLElement | null;
    increment: HTMLElement | null;
    count: HTMLElement | null;
}

class Website {
    private counterValue: number = 0;
    private elements: CounterElements;

    constructor() {
        this.elements = {
            decrement: document.getElementById('decrement'),
            increment: document.getElementById('increment'),
            count: document.getElementById('count-value')
        };

        this.init();
    }

    private init(): void {
        this.setupEventListeners();
        this.setupNavbar();
    }

    private setupEventListeners(): void {
        // Setup counter buttons
        if (this.elements.decrement) {
            this.elements.decrement.addEventListener('click', () => this.updateCounter(-1));
        }

        if (this.elements.increment) {
            this.elements.increment.addEventListener('click', () => this.updateCounter(1));
        }

        // CTA button event
        const ctaButton = document.getElementById('cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', () => {
                alert('Thanks for getting started with our website!');
            });
        }

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (this: HTMLElement, e: Event) {
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
    }

    private updateCounter(change: number): void {
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

    private setupNavbar(): void {
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