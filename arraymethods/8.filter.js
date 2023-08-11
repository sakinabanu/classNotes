const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function checkOdd(arr) {
    if (arr % 4 == 1) return true;
    else return false;
  }
const a = arr.filter(checkOdd);
console.log(a);