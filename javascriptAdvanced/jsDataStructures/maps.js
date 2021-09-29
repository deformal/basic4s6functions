const faker = require('faker');
const newMap = new Map()//stores all the about the fake persons of the fakePersons class
class FakePerson {
    createNewPerson(data,callback){
        console.time("adding a new key-value pain in the map")
        let created = newMap.set(
            data.username,
            {"username":data.username,"password":data.password,"email":data.email})
        console.timeEnd("adding a new key-value pain in the map")
        if(created == null) callback("Sorry some error occured",null)
        else callback(null,{"msg":"Created","data": newMap.get(data.username)})   
    }
    showPerson (username,callback){
        let found = newMap.get(username)
        if(!found) callback("Error Occured",null);
        else callback(null,{"msg":"Created","data":found})
    }
}
// creates a new map object 
let newPerson = {
    username : faker.internet.userName(),
    password : faker.internet.password(),
    email : faker.internet.email()
}

const fakers = new FakePerson()
fakers.createNewPerson(newPerson,(err,result)=>{
    if(err) console.log("err",err);
    else {
        const body = JSON.stringify(result)
        const final = JSON.parse(body)
        console.log(final)
    }
})
