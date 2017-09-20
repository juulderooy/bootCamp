//vraag 9

function multiply(value, multiplier) {
  console.log(value * multiplier);

}
multiply(9,3)

function fullName(firstName, lastName) {
  console.log(firstName + lastName);
}
fullName("Juul", " de Rooij")

//vraag 10

var x = function math(a,b) {
  return a + b;
}

var z = x(76,40)
console.log(z);

var x = function name(a,b) {
  return a + b;
}

var z = x("Juul", " de Rooij")
console.log(z);

//vraag 11

(function () {
    var x = "Hello!!";

})();

(function () {
    var z = "I am 18 years old";

})();

//vraag 12

(function(){
  var one = "Juul";
  var two = " de Rooij";
  
    var foo = function() {

    };
    window.onload = foo;

})()
console.log(name);
