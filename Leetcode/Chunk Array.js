/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    const chunkedArr = []
    i = 0
    j = size
    while (i < arr.length) {
        const tempArr = arr.slice(i, j)
        chunkedArr.push(tempArr)
        i += size
        j += size
    }
    return chunkedArr
};
