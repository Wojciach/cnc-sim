export function generalSyntaxCheck(line: string, index: number): boolean {

    // check for commas isntead of dots as decimal separator
    if (/,/.test(line)) {
        console.log(` - E R R O R :  C O M M A  I N  L I N E ${index +1} ! - please use dot (.) as decimal separator.`);
        return false;
    }
    
    // check for spaces between command letters and numbers
    const invalidCharPattern = /[GMXYZ]\s+/;
    if (invalidCharPattern.test(line)) {
        console.log(` - E R R O R :  please remove spaces between G M X Y Z characters and numbers in line ${index + 1} ! - `);
        return false;
    }

    const tooManyG0123 = /G01|G02|G03|G04/;
    if (line.match(tooManyG0123)?.length! > 1) {
        console.log(` - E R R O R :  Too many movement G00/G01/G02/G03 in one line. (${index + 1}) Pelase use only one movmement command in a line ! - `);
        return false;
    }


    ['X', 'Y', 'Z', 'I', 'J', 'K', 'R'].forEach((substring) => {
        const regex = new RegExp(substring, 'gi')
        if (line.match(regex)?.length! > 1) {
            console.log(` - E R R O R :  Too many ${substring} coordinates in one line. (${index + 1}) Pelase use only one ${substring} coordinate in a line ! - `);
            return false;
        }
    })


    return true;
}