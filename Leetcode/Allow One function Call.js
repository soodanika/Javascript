/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let ran = 0;
    return function (...args) {
        if (ran === 0) {
            let called = fn(...args)
            ran++;
            return called;
        } else {
            return undefined;
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
