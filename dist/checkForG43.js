export function checkForG43(line) {
    const G43Posibility = line.match(/\bG43\b|\bH\d+\b|\bG44\b/ig)?.length ?? 0;
    console.log(G43Posibility);
    if (G43Posibility < 1) {
        console.log(" - G 4 3   N O T  D E T E C T E D ! - ");
        return false;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=checkForG43.js.map