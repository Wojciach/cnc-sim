export class gCodeExplanation {
    static on(thiss, key) {
        //console.log("G CODE EXPLANATION ON for key:", key, " thiss:", thiss);
        const dd = document.createElement('dd');
        dd.className = "g-code-explenation";
        const gCodeName = thiss.id.replace("spec-val-", "");
        dd.textContent = gCodeExplanation.text[key] || "No explanation available.";
        thiss.appendChild(dd);
        //gCodeExplanation.text
    }
    static off() {
        this.querySelector('dd')?.remove();
    }
}
gCodeExplanation.text = {
    G00: "Rapid feed",
    G01: "Working feed",
    G02: "Clockwise arc",
    G03: "Counterclockwise arc",
    G04: "Dwell",
    G10: "Programmable data input",
    G17: "XY plane selection",
    G18: "ZX plane selection",
    G19: "YZ plane selection",
    G20: "Programming in inches",
    G21: "Programming in millimeters",
    G28: "Return to home position",
    G30: "Return to secondary home position",
    G32: "Thread cutting",
    G33: "Thread cutting",
    G40: "Cancel cutter radius compensation",
    G41: "Cutter radius compensation left",
    G42: "Cutter radius compensation right",
    G43: "Tool length offset positive",
    G44: "Tool length offset negative",
    G49: "Cancel tool length offset",
    G50: "Scaling",
    G51: "Cancel scaling",
    G53: "Machine coordinate system",
    G54: "Work coordinate system 1",
    G55: "Work coordinate system 2",
    G56: "Work coordinate system 3",
    G57: "Work coordinate system 4",
    G58: "Work coordinate system 5",
    G59: "Work coordinate system 6",
    G61: "Exact stop check mode",
    G64: "Default cutting mode",
    G73: "High speed drilling cycle",
    G80: "Cancel canned cycle",
    G81: "Simple drilling cycle",
    G82: "Drilling cycle with dwell",
    G83: "Peck drilling cycle",
    G84: "Tapping cycle",
    G85: "Boring cycle",
    G86: "Boring cycle",
    G87: "Back boring cycle",
    G88: "Boring cycle",
    G89: "Boring cycle",
    G90: "Absolute programming",
    G91: "Incremental programming",
    G92: "Position register",
    G94: "Feed per minute",
    G95: "Feed per revolution",
    G96: "Constant surface speed (CSS)",
    G97: "Cancel CSS",
    G98: "Return to initial point in canned cycle",
    M01: "Optional stop",
    M02: "End of program",
    M03: "Spindle on clockwise",
    M04: "Spindle on counterclockwise",
    M05: "Spindle stop",
    M06: "Tool change",
    M07: "Mist coolant on",
    M08: "Flood coolant on",
    M09: "Coolant off",
    M30: "End of program and rewind",
    M48: "Enable feed and speed override",
    M49: "Disable feed and speed override",
    M98: "Call subprogram",
    M99: "End of subprogram or loop",
    S: "Spindle speed",
    F: "Feed rate",
    T: "Tool selection",
    H: "Tool length offset",
    D: "Tool diameter offset"
};
//# sourceMappingURL=gCodeExplanation.js.map