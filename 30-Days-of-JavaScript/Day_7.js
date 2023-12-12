// Exercise : Level 1

// 1
function fullName() {
    console.log("Abhay Kabdwal");
}
fullName() // function call

// 2
function fullName1(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(fullName1("Abhay","Kabdwal")); // function call

// 3
function addNumbers(num1,num2) {
    return num1+num2;
}
console.log("Sum of numbers :",addNumbers(5,4));

// 4
function areaOfRectangle(num1,num2) {
    return num1*num2;
}
console.log("Area of Rectangle :",areaOfRectangle(5,4));

// 5
function perimeterOfRectangle(num1,num2) {
    return 2*(num1 + num2);
}
console.log("Perimeter of Rectangle :",perimeterOfRectangle(5,4));

// 6
function volumeOfRectangularPrism(num1,num2,num3) {
    return num1*num2*num3;
}
console.log("Volume of Rectangular prism :",volumeOfRectangularPrism(5,4,2));

// 7
function areaOfCircle(num1) {
    return Math.PI*num1*num1;
}
console.log("Area of circle :",areaOfCircle(5));

// 8
function circumOfCircle(num1) {
    return Math.PI*2*num1;
}
console.log("Circumference of circle :",circumOfCircle(5));

// 9
function density(mass,volume) {
    return mass/volume;
}
console.log("Density :",density(5,4));

// 10
function speed(distance,time) {
    return distance/time;
}
console.log("Speed :",speed(20,4));

// 11