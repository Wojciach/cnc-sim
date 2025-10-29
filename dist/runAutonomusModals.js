import { possibleModalValues } from "./modals.js";
import { singleCommandRunner } from "./singleCommandRunner.js";
export function runAutonomusModals(line, index) {
    const pattern = /\b[MG]\d{1,2}\b|\b[XYZ]\s*[-+]?\d+\.?\d*\b|\b[FS]\s*\d+\.?\d*\b|\b[HTD]\s*\d{1,2}\b/gi;
    const autonomusModals = [...possibleModalValues.G17, ...possibleModalValues.G20, ...possibleModalValues.G54,];
    autonomusModals.forEach((modal) => {
        if (modal === null)
            return;
        singleCommandRunner(modal);
    });
    return true;
}
//# sourceMappingURL=runAutonomusModals.js.map