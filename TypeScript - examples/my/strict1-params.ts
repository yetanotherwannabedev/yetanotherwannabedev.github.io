function countLines(texts?: (string | null)[]): number {
    let count: number = 0;
    if (texts) {
        for (const text of texts) {
            if (text && text.length !== 0) {
                count++;
            }
        }
    }
    return count;
}

let a = countLines(["hello", "", "wolrd"]);
let b = countLines(["null", "isComing", null]);
let c = countLines();