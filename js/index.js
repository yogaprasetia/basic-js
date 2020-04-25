//alert('hello world');

//document.getElementById('hello_world').innerHTML = "My Name Yoga Prasetia";

//console.log("My Name is Yoga Prasetia");

//Komentar
/* Komentar */

//String
var myName = "My Name is Yoga Prasetia";
var address = 'Pacitan';

//Integer
var firstNumber = 1;

//Decimal
var someDecimal = 1.4;

//Boolean
var isHandsome = false;

//Array
var fruits = ['Apple', 'Banana', "Melon"];

//Object
var car = {
    name: "Bugatti",
    color: 'yellow',
    cc: 9000
}

//Operators
var one = 1;
var two = 2;

jumlah = one + two;

var firstName = "Yoga";
var lastName = "Prasetia";

function add(){
    console.log(1+8);
}

add();

var person = {
    firstNama: "Yoga",
    lastNama: "Prasetia",
    age: 21,
    walk(){
        return "I am walking";
    }
}

function setName(){
    var txtName = document.getElementById('txtName');
    document.getElementById('name').innerHTML = txtName.value;
}

//Length
var txt = "qwerty";
document.getElementById('name').innerHTML = txt.length;

//indexOf
var txt = "I am seeking for a hot girl";
document.getElementById('name').innerHTML = txt.indexOf('hot');

//substr
var txt = "Apple, Microsoft, Linux";
document.getElementById('name').innerHTML = txt.substr(0, 16);

//replace
var txt = "Please Visit Us"
document.getElementById('name').innerHTML = txt.replace("Us", "Dumbways");

//uppercase
var txt = "Please Visit Us"
document.getElementById('name').innerHTML = txt.toUpperCase();

//lowercase
var txt = "Please Visit Us"
document.getElementById('name').innerHTML = txt.toLowerCase();

//charAt
var txt = "Please Visit Us"
document.getElementById('name').innerHTML = txt.charAt(8);

//split
var txt = "a,b,c,d"
var txtArray = txt.split(",");
document.getElementById('name').innerHTML = txtArray[3];

//call string like array
var txt = "a,b,c,d"
document.getElementById('name').innerHTML = txt[3]

//Number Method
var txtNumber = 12.356;

//tostring
document.getElementById('name').innerHTML = txtNumber.toString();

//tofix
document.getElementById('name').innerHTML = txtNumber.toFixed();

document.getElementById('name').innerHTML = txtNumber.toFixed();

//global method
document.getElementById('name').innerHTML = Number(txtNumber);



console.log(person.walk)
console.log(person.firstNama + " " + person.lastNama)
console.log(myName)
console.log(address)
console.log(firstNumber)
console.log(someDecimal)
console.log(isHandsome)
console.log(fruits)
console.log(car)
console.log(jumlah)
console.log(firstName +" "+ lastName)
console.log(firstName + (one + two));
