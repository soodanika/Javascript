var expect = function (val) {
    var obj = {
        toBe: function (value) {
            console.log(value, val)
            if (val !== value) throw new Error("Not Equal");
            else return true;
        },
        notToBe: function (value) {
            if (val === value) throw new Error("Equal");
            else return true;
        }
    }
    return obj;
};