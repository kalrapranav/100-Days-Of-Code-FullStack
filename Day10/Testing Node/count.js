/**
 * Modules and require()
*/

var counter = function(arr) {
    return 'THere are ' + arr.length + ' elements in this array';
};

//To export elements the file where the current file is required 
module.exports = counter;