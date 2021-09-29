const arrayDivider = (arr, size) => {
  let newArr = [];
  while (arr.length > 0) newArr.push(arr.splice(0, size));
  return newArr;
};
console.log(arrayDivider([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
