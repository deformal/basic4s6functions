const prompt = require("prompt");
const isPrime = (number) =>
{
  let divisor = 2;
  while (divisor < number)
  {
    if (number % divisor == 0) return false;
    else divisor++;
  }
  return true;
}
prompt.get(["number"], (err, number) =>
{
  if (err) console.log(err)
  else
  {
    const result = isPrime(number.number);
    console.log(result);
  }
});
