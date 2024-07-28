/**
 * totalModule
 */
function total(first, ...arr) {
    return arr.reduce((total, num) => total+=num, first);
    
}

module.exports = total;