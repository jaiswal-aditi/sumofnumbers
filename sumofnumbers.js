function sumFor(listNum) {
  let sum = 0;
  for (let i = 0; i < listNum.length; i++) {
    sum += listNum[i];
  }
  return sum;
}

function sumWhile(listNum) {
  let sum = 0;
  const i = 0;
  while (i < listNum.length) {
    sum += listNum[i];
  }
  return sum;
}

function sumRecursion(listNum, n) {
  if (n === 0) return 0;
  if (n > 1) {
    return listNum[n] + sumRecursion(listNum, n - 1);
  }
  return listNum[n];
}

function sumTheSimpleWay(numList) {
  return _.reduce(numList, (memo, num) => memo + num);
}

const checkList = [1, 2, 3, 4, 5];
console.log(sumFor(checkList));
console.log(sumWhile(checkList));
console.log(sumRecursion(checkList), checkList.length);
console.log(sumTheSimpleWay(checkList));
