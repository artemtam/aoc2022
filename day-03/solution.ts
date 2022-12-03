// index of each item = the priority (_ to skip 0)
const itemPriorities = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

const solvePart1 = (input: string): number => {
    const rucksacks = input.split('\n');

    let prioritiesSum = 0;

    for (const rucksack of rucksacks) {
        const items = rucksack.split('');

        // fill in a set of items in the first compartment

        const itemsInFirstComp = new Set<string>();

        for (let i = 0; i < items.length / 2; i++) {
            itemsInFirstComp.add(items[i]);
        }

        // fill in a set of items in the second compartment

        const itemsInSecondComp = new Set<string>();

        for (let i = items.length / 2; i < items.length; i++) {
            if (!itemsInSecondComp.has(items[i])) {
                itemsInSecondComp.add(items[i]);

                // if new item exists in the first comp, add the priority to the sum

                if (itemsInFirstComp.has(items[i])) {
                    prioritiesSum += itemPriorities.indexOf(items[i]);
                }
            }
        }
    }

    return prioritiesSum;
};

const solvePart2 = (input: string): number => {
    const rucksacks = input.split('\n');

    let prioritiesSum = 0;

    // iterate over groups of 3

    for (let i = 0; i < rucksacks.length - 2; i += 3) {
        // parse all 3 rucksacks

        const rucksackA = rucksacks[i].split('');
        const rucksackB = rucksacks[i + 1].split('');
        const rucksackC = rucksacks[i + 2].split('');

        const rucksackASet = new Set(rucksackA);

        // find common items between A and B

        const rucksackABSet = new Set();

        for (const item of rucksackB) {
            if (rucksackASet.has(item)) {
                rucksackABSet.add(item);
            }
        }

        // find a single common item between AB and C

        for (const item of rucksackC) {
            if (rucksackABSet.has(item)) { // if found, add priority to the sum and break
                prioritiesSum += itemPriorities.indexOf(item);
                break;
            }
        }
    }

    return prioritiesSum;
};

export { solvePart1, solvePart2 };