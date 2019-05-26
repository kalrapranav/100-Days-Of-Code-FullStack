var counter = function (arr) {
    return 'THere are ' + arr.length + ' elements in this array';
};

var adder = function(a,b) {
    return `The sum of the two numbers: ${a} + ${b} = ${a+b}`;
}

var pi = 3.142;


//module.export.___ aloows ot add propeterties to the exports objects as
//.property will be diffrent as allow as to export diffrent elemenst associated
//with that property

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

/**
 * Another way ot use exporting using module patters 
 */

module.exports.counter = function (arr) {
    return 'THere are ' + arr.length + ' elements in this array';
};

module.exports.adder = function (a, b) {
    return `The sum of the two numbers: ${a} + ${b} = ${a + b}`;
}

module.exports.pi = 3.142;


/**
 * Another way ot use exporting using module patters
 */


var counter = function (arr) {
    return 'THere are ' + arr.length + ' elements in this array';
};

var adder = function(a,b) {
    return `The sum of the two numbers: ${a} + ${b} = ${a+b}`;
}

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};