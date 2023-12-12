// let challenge = "30 Days Of JavaScript";

// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0, 2));
// console.log(challenge.substring(3, challenge.length));
// console.log(challenge.includes("Script"));
// console.log(challenge.split());
// console.log(challenge.split(" "));

// let companies = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
// console.log(companies.split(","));

// console.log(challenge.replace("JavaScript", "Python"));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt("J"));
// console.log(challenge.indexOf("JavaScript"));
// console.log(challenge.lastIndexOf("JavaScript"));

// console.log(
//   "You cannot end a sentence with because because because is a conjunction".indexOf(
//     "because"
//   )
// );
// console.log(
//   "You cannot end a sentence with because because because is a conjunction".lastIndexOf(
//     "because"
//   )
// );
// console.log(
//   "You cannot end a sentence with because because because is a conjunction".search(
//     "because"
//   )
// );

// console.log(("  " + challenge).trim());
// console.log(challenge.startsWith("30"));
// console.log(challenge.endsWith("ript"));

// console.log(challenge.match(/a/gi));
// console.log("30 days of".concat("JavaScript"));
// console.log(challenge.repeat(2));

// console.log(
//   "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
// );
// console.log(
//   `"Love is not patronizing and charity isn't about pity, it is about love. \
//   Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
// );

// console.log(typeof "10" == typeof 10);
// console.log(typeof parseInt("10") == typeof 10);

// console.log(parseFloat("9.8") == 10);
// console.log(Math.ceil(parseFloat("9.8")) == 10);

// console.log(("pyhton".match(/on/gi) && "jargon".match(/on/gi)) != null);
// console.log(
//   "I hope this course is not full of jargon".match(/jargon/gi) != null
// );

// console.log(Math.floor(Math.random() * 101));
// console.log(Math.floor(Math.random() * 51) + 50);
// console.log(Math.floor(Math.random() * 226));

// console.log("JavaScript".charAt(Math.floor(Math.random() * 10)));

// console.log(
//   "Love is the best thing in this world. Some found their love and some are still looking for their love.".match(
//     /love/gi
//   ).length
// );
// console.log(
//   "You cannot end a sentence with because because because is a conjunction".match(
//     /because/gi
//   ).length
// );

// let sentence =
//   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re \
//   rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting \
//   tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is \
//   30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
// console.log(
//   sentence.replace("%", "").replace("&", "").replace("@", "").replace(";", "")
// );

// alert("Welcome to 30DaysOfJavaScript");

// let number = prompt("Enter number", "number goes here");
// console.log(number);

// const agree = confirm("Are you sure you like to delete? ");
// console.log(agree); // result will be true or false based on what you click on the dialog box

// const then = new Date()
// console.log(then) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)

// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`)

// console.log("Time in seconds elapsed from 1 Jan 1970 is ",(now.getTime())/1000);


// let base = prompt("Enter base of the triangle", "Value goes here");
// let height = prompt("Enter height of the triangle", "Value goes here");
// console.log("Area of triangle : ",base * height * 0.5);


// let a = parseInt(prompt("Enter side a of the triangle", "Value goes here"));
// let c = parseInt(prompt("Enter side c of the triangle", "Value goes here"));
// let b = parseInt(prompt("Enter side b of the triangle", "Value goes here"));
// console.log("Perimeter of triangle : ",a+b+c);

// let birthYear = prompt("Enter your birth year ", " ");
// var now = new Date();

// if ((now.getFullYear - birthYear) > 18) {
//     alert("You are",(now.getFullYear - birthYear),". You are old enough to drive")
// }else(
//     alert("You are",(now.getFullYear - birthYear),". You will be allowed to drive after ",18-)
// );

// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s

// function sayHello() {
//     console.log('Hello')
//   }
//   setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)