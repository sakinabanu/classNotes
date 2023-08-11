
const arr = [1, 7, 6, 0, [ 9, 7, 3,[ 6, 2, 5,[ 4, 7]]]];
console.log(arr.flat(3).flatMap((x) => x <= 10));