import { singleCommandRunner } from './singleCommandRunner.js';

export function applyMovement(movementMatch: string): boolean {
    console.log('AAAPPLLYYIINNGG MOOOVVEEEMEENNTT :', movementMatch);
    singleCommandRunner(movementMatch);
    return true;
}