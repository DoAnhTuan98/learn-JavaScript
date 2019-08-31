var readlineSync = require('readline-sync');

var pet = {};
var name = readlineSync.question('your pet name:');
var gender = readlineSync.question('your pet gender:');
var weight = readlineSync.question('weight:');

pet.name = name;
pet.gender =  gender;
pet.weight = parseInt(weight);

console.log(pet);