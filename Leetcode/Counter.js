var createCounter = function (n) {
    //Clouser concept - the inside function is bundled together with its lexical env
    let count = n;
    return function () {
        return count++;
    };
};


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
