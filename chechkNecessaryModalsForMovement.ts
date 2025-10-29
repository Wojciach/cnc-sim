export class ChechkNecessaryModalsForMovement {
    public static run(line: string): boolean {
        
        return true;
    }

    static differentiateForG0123(line: string): void {
        /[XYZ]/ig.test(line)
    }
}