const animals = {
  animaldata: "Animal Data",
  functionprint: function () {
    console.log(this.animaldata);
  },
  fullInfo: function () {
    console.log(` ${this.name} ${this.type} ${this.status} ${this.numbers} `);
  },
};
const animal1 = {
  name: "Tiger",
  type: "bigcat",
  status: "endengoured",
  numbers: 2000,
};
const animal2 = {
  name: "Lion",
  type: "bigcat",
  status: "safe",
  numbers: "10000+",
};
const animal3 = {
  name: "Cheeta",
  type: "bigcat",
  status: "endengoured",
  numbers: 3000,
};
const one = animals.fullInfo.bind(animal1); // now the animal is a function with the same functionality as the animals fullInfo method
const two = animals.fullInfo.apply(animal2); // this is not a function
const three = animals.fullInfo.call(animal3);
const four = animals.functionprint.bind(animal1);
one();
four();
