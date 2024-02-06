Array.prototype.last = function () {

    //Checking if array is not empty then returning last element
    if (this.length !== 0) return this[this.length - 1];

    //Returning -1 if length is 0
    return -1;

};


const arr = [1, 2, 3];
arr.last(); // 3
