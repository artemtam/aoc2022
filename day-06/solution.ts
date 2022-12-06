const solve = (input: string, uniqueCount: number): number => {
    const uniqueCharacters: string[] = []; // sliding window

    for (let i = 0; i < input.length; i++) {
        const ch = input[i];

        if (!uniqueCharacters.includes(ch)) {
            uniqueCharacters.push(ch);

            if (uniqueCharacters.length === uniqueCount) { // if found uniqueCount in a row -> return
                return i + 1;
            }
        } else { // if not unique -> remove all before the duplicated one (incl) and continue
            const repeatedChIndex = uniqueCharacters.indexOf(ch);
            uniqueCharacters.splice(0, repeatedChIndex + 1);
            uniqueCharacters.push(ch);
        }
    }

    throw new Error(`A marker of ${uniqueCount} unique characters not found`);
}

const solvePart1 = (input: string): number => {
    return solve(input, 4);
};

const solvePart2 = (input: string): number => {
    return solve(input, 14);
};

export { solvePart1, solvePart2 };