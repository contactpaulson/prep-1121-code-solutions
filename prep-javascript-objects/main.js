const person = {
  firstName: 'Paul',
  lastName: 'Son',
  hobby: 'Golf'
};
console.log(person);

var fullName = person.firstName + '' + person.lastName;
console.log("This person's name is: " + fullName);

person.job = 'Unemployed';
console.log("This person's current job is: " + person.job);

person.previousJob = 'Teacher';
console.log("This person's previous job was: " + person.previousJob);

console.log(person);
