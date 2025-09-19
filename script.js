"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gcodeRunner_js_1 = require("./gcodeRunner.js");
var Website = /** @class */ (function () {
    function Website() {
        this.counterValue = 0;
        this.elements = {
            decrement: document.getElementById('decrement'),
            increment: document.getElementById('increment'),
            count: document.getElementById('count-value')
        };
        this.init();
    }
    Website.prototype.init = function () {
        this.setupEventListeners();
        this.setupNavbar();
    };
    Website.prototype.setupEventListeners = function () {
        var _this = this;
        // Setup counter buttons
        if (this.elements.decrement) {
            this.elements.decrement.addEventListener('click', function () { return _this.updateCounter(-1); });
        }
        if (this.elements.increment) {
            this.elements.increment.addEventListener('click', function () { return _this.updateCounter(1); });
        }
        // CTA button event
        var ctaButton = document.getElementById('cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('click', function () {
                alert('Thanks for getting started with our website!');
            });
        }
        // run g-code button event
        var gCodeButton = document.getElementById('run-gcode');
        if (gCodeButton) {
            gCodeButton.addEventListener('click', function () {
                console.log('g-code running...');
                (0, gcodeRunner_js_1.runGCode)();
            });
        }
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                var targetId = this.getAttribute('href');
                if (targetId && targetId !== '#') {
                    var targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    };
    Website.prototype.updateCounter = function (change) {
        var _this = this;
        console.log("Counter changed by: ".concat(change));
        this.counterValue += change;
        if (this.elements.count) {
            this.elements.count.textContent = this.counterValue.toString();
            // Add animation effect
            this.elements.count.classList.add('pop');
            setTimeout(function () {
                if (_this.elements.count) {
                    _this.elements.count.classList.remove('pop');
                }
            }, 300);
        }
    };
    Website.prototype.setupNavbar = function () {
        var burger = document.querySelector('.burger');
        var nav = document.querySelector('.nav-links');
        if (burger && nav) {
            burger.addEventListener('click', function () {
                nav.classList.toggle('nav-active');
                // Burger animation
                burger.classList.toggle('toggle');
            });
        }
    };
    return Website;
}());
// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    new Website();
});
