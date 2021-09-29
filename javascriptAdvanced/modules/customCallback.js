const { json } = require("express");

//js callback functions are functions that are input of other functions
const superHeros = [
  { name: "batman", human: true, powers: "", age: "50" },
  { name: "superman", human: false, powers: "", age: "100" },
  { name: "flash", human: false, powers: "", age: "25" },
  { name: "ironman", human: true, powers: "", age: "40" },
  { name: "daredevil", human: true, powers: "", age: "35" },
  { name: "thor", human: false, powers: "", age: "200" },
];
const data = process.argv.slice(2);
//-------------------------------------------------------------------------
const powerfilter = (filteredHeros) => {
  filteredHeros.forEach((element) =>
    element.human ? (element.powers = "no") : (element.powers = "yes")
  );
  return superHeros;
};

const batmansidekick = (filteredHeros) => {
  filteredHeros.forEach((element) =>
    element.name == "batman"
      ? (element.sidekick = "robin")
      : (element.sidekick = "")
  );
  return superHeros;
};
const findNonHumanHeros = (arrayObject, ageGroup, ...callbackFunctions) => {
  const filterHeros = arrayObject.filter((element) => {
    return element.age <= ageGroup;
  });
  console.log(callbackFunctions[0](filterHeros));
  console.log(callbackFunctions[1](filterHeros));
};
findNonHumanHeros(superHeros, 100, batmansidekick, powerfilter);
//--------------------------------------------------------------------------
const login = (userdata, callback) => {
  const username = userdata.includes("saurabh");
  const password = userdata.includes("sj");
  if (!username || !password) callback("err", null);
  else if (username && password) callback(null, "ok");
};
login(data, (err, result) => {
  if (err) console.error(err);
  else console.log(result);
});
