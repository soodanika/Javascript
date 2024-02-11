function add(a) {
    return function (b) {
        if (b) {
            return add(a + b)
        } else {
            return a;
        }
    }
}

console.log(add(20)(30)(40)())
