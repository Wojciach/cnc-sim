export function checkForG41_G42(line) {
    console.log(" - C H E C K  F O R  G 4 1  /  G 4 2 : - ");
    if (line.match(/(G41|G42)/ig) === null) {
        console.log(" - G41  O R  G42  L I N E  N O T  D E T E C T E D ! - ");
        return false;
    }
    else if (((line.match(/(G0?[0,1])/ig)?.length || [].length) < 1)) {
        console.log(" - with G41/G42 you need to add compensation movement using G00 or G01 - ");
        return false;
    }
    else if (((line.match(/(G0?[0,1])/ig)?.length || [].length) > 1)) {
        console.log(` - with G41/G42 you need to add only one compensation movement G00 or G01 (you apparently have use ${line.match(/(G0?[0,1])/ig)?.length} parameters) -`);
        return false;
    }
    else if (((line.match(/(M)/ig)?.length ?? [].length) > 0)) {
        console.log(" - please do not use 'M' codes in the same line with G41/G42 line - ");
        return false;
    }
    else if (((line.match(/(X)/ig)?.length ?? [].length) > 1)) {
        console.log(" - please do not use more than one 'X' parameter in G41/G42 line - ");
        return false;
    }
    else if (((line.match(/(Y)/ig)?.length ?? [].length) > 1)) {
        console.log(" - please do not use more than one 'Y' parameter in G41/G42 line - ");
        return false;
    }
    else if (((line.match(/(Z)/ig)?.length ?? [].length) > 1)) {
        console.log(" - please do not use more than one 'Z' parameter in G41/G42 line - ");
        return false;
    }
    else if (((line.match(/(D0?[0-9]{1,2})/ig)?.length ?? [].length) < 1)) {
        console.log(" - you need to spicify which (D) - Diameter compensation you want to use. Please choose a number between 0 and 9 for example: D01 or D1  - ");
        return false;
    }
    else if (((line.match(/(D)/ig)?.length ?? [].length) > 1)) {
        console.log(" - Please do not use more tha one D letter in G41/G42 line  - ");
        return false;
    }
    else if (((line.match(/(^GDXYZ)/ig)?.length ?? [].length) > 1)) {
        console.log(" - you have used some letters that are not allowed in G10 line. \n The onnly letters asllowed in this line are: G D X Y Z - ");
        return false;
    }
    else if (((line.match(/\b([XY]\s*-?\d*\.?\d+)(?=\s|$)/ig))?.length ?? [].length) < 1) {
        console.log(" - error: coordinate parameter is missing. \n In G41/G42 line you need to use at least one of X Y coordinate with a proper numerical value (For G17 Plane necessary coordinates are X or Y or both of them) - ");
        return false;
    }
    console.log(" - G41  O R  G42  L I N E  D E T E C T E D ! - AND I T  I S  V A L I D ! - ");
    return true;
}
//# sourceMappingURL=checkForG41_G42.js.map