export function checkForSpidneRepositionLines(line: string): boolean {
    const spindleRepositionCommands = line.match(/\b([XYZ])/ig);
    return false;
}