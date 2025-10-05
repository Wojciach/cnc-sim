//checking if in the whole line there is S or F command and if is it si valid
export function FS_CommnadsPrevalidation(line) {
    //checking if in the whole line there is S or F command
    console.log(" - C H E C K I N G  F  A N D  S   I N  T H E  C O M M A N D ! - ");
    if (/\b[SF]/ig.test(line)) {
        console.log(" - S  O R  F   D-E-T-E-C-T-E-D ! - ");
    }
    else {
        console.log(" - S  O R  F   --N--O--T--  D E T E C T E D ! - ");
        return true;
    }
    //checking if in the whole line there is F command and if is it valid
    const patternForF = /\bF\s*\d+\.?\d*\b/ig;
    const patternForS = /\bS\s*\d+\b/ig;
    if (patternForF.test(line)) {
        console.log(" - F  D E T E C T E D  and seem to be OK! - ");
        console.log(line.match(patternForF));
        return true;
    }
    else if (patternForS.test(line)) {
        console.log(" - S  D E T E C T E D  and seem to be OK! - ");
        return true;
    }
    else {
        console.log(" - E R R O R :  F  O R  S   C O M M A N D  I S  N O T  V A L I D ! - ");
        return false;
    }
}
//# sourceMappingURL=FS_CommandsPrevalidation.js.map