/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let current = 0;
    let next = 1;

    while (true) {
        yield current;
        let temp = current;
        current = next;
        next = temp + next;
    }

};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */