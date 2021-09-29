const person = {
  fullname: function (firstname, lastname) {
    console.log(`${firstname} ${lastname}`);
  },
};
const person2 = {
  fullname: function () {
    const weight = this.weight();
    return `${this.firstname} ${this.lastname} ${weight} `;
  },
};
const eObject = {};
const pObject = {
  firstname: "matt",
  lastname: "murdock",
  weight: function () {
    return "70";
  },
};
person.fullname.call(eObject, "saurabh", "jainwal");
const result = person2.fullname.call(pObject);
console.log(result);
