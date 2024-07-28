/**
 * totalModule
 */
export function total(first, ...arr) {
    return arr.reduce((total, num) => total+=num, first);
    
}

export function findNum(num, arr) {
    return arr.find(ele => ele==num);
}

export function filterNum(num, arr) {
    return arr.filter(ele => ele > num);
}
