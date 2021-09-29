//the following function returns an array, containing elements from both arrays which aren't common.
//in both of them;
//for example a1=[1,2,3,4,5], a2=[1,2,3,5,6] => would result in [4,6];
const diffArray = (arr1, arr2) =>
  arr1.concat(arr2).filter(e => !arr1.includes(e) || !arr2.includes(e));
console.log(diffArray([1, 2, 3, 5, 6, 9], [1, 2, 3, 4, 5]));
