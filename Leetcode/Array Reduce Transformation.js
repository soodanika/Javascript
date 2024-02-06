var reduce = function (nums, fn, init) {
    let res = init;
    for (let i of nums) {
        res = fn(res, i);
    }
    return res;
};