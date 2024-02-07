/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    var count = init;
    var obj = {
        increment: function () {
            return ++count;
        },
        decrement: function () {
            return --count;
        },
        reset: function () {
            return count = init;
        }
    }
    return obj;
};


//const counter = createCounter(5)
//counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
