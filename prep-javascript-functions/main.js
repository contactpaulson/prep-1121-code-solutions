function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var sum = addTwoNumbers(2, 2);
console.log(sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return '"Hello ' + name + '!"';
}
var htmlExercise = getGreeting('World');
console.log(htmlExercise);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiply = addAndMultiplyBy5(10, 5);
console.log(addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var multDiv = multiplyAndDivideBy5(35, 10);
console.log(multDiv);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var sub2Num = subtractTwoNumbers(22, 7);
console.log(sub2Num);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
var circle = getCircleCircumference(5);
console.log(circle);

function getFullName(firstName, lastName) {
  return '"' + firstName + ' ' + lastName + '"';
}
var person = getFullName('Juan', 'Ramirez');
console.log(person);

function cube(number) {
  return number ** 3;
}
var almostForgotWhatACubeWas = cube(5);
console.log(almostForgotWhatACubeWas);
