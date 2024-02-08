/**
 * @param {any[]} arr
 * @param {number} depth
 * @return {any[]}
 */
var flat = function (arr, n) {
    const res = [];

    function deepflat(arr, depth) {
        for (const val of arr) {
            if (typeof (val) === 'object' && depth < n) {
                deepflat(val, depth + 1);
            } else {
                res.push(val);
            }
        }
        return res;
    }
    return deepflat(arr, 0);
};