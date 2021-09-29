//javascript promises
//js promises are a good way to deal with something thats called a callback hell
//promises are good way to be able to deal with async functions
//promieses are createed using the promise() function
//for example
const numbers = { x: 2, y: 5 };
const doSum = (data) =>
  new Promise((resolve, reject) => {
    if (data == null || data == "") reject("empty values");
    else if (data != null || data != "") resolve(data.x + data.y);
  });
doSum(numbers)
  .then((result) => console.log("sum -> ", result))
  .catch((err) => console.log(err))
  .finally(
    setTimeout(() => {
      console.log("data entered was -> ", numbers);
    }, 5)
  );
