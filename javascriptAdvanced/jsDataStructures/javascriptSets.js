//there are some advanced data structures that are built right into javascript 
//this is about sets
const faker = require('faker');
const peopleInfo = new Set()
class FakePeople {
    constructor() {
        this.firstName = faker.internet.userName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
} 
for (let i = 0 ; i < 5; i++){
 let newPerson = new FakePeople()
 peopleInfo.add(newPerson);
} //this returns an object that can be iterated over for the values

const keys = peopleInfo.keys() //returns an iterable object containg values of the given set
for(let objs of keys) console.log(objs.firstName)
