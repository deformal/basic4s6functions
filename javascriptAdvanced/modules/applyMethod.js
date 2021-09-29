const cars = {
  carinfo: function (name, brand, year) {
    console.log(name, brand, year);
    console.log(this.carName, this.carBrand, this.carYear);
  },
};

const carObject = {
  carName: "X6",
  carBrand: "BMW",
  carYear: "2019",
};
const array = ["M3", "BMW", "2019"];
cars.carinfo.apply(carObject, array);
