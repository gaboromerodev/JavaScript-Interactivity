const personalGreeting = "Hello from Gabriel! I am a JavaScript developer!"

console.log(personalGreeting);


//Change the background color of the header
const changeBkg = document.getElementById('hero');
changeBkg.style.background = 'red';
changeBkg.style.color = '#000';


// add an event listener to a button
// change the style and the title on click
const headerBtn = document.getElementById('headerBtn');
const myTitle = document.getElementById('myTitle');
let counter = 0;

headerBtn.addEventListener('click', function(e){
    this.style.background = 'black';
    this.style.color = "white";
    myTitle.textContent = 'I am learning JavaScript';
    counter += 1;
   

    //make the button text equal the counter variable
    headerBtn.textContent = counter;
    console.log('it was clicked');

})


// Find if the two boxe's combined height will fit in the back of the truck. (3.5mts tall capacity)
// First declare 2 variables, 'box1' and 'box2; and assign them each the height values shown in the slide.
// Second, create a variable named 'combinedHeight' that stores the value of box1 added to box2
// Third, create a variable named 'truckHeight' that stores the truck height capacity from the slide.
// Lastly, console.log the value of the combinedHeight subtracted from the truckHeight, if it is a positive number, they will fit!

const box1 = 1.342;
const box2 = 2.038;
const truckHeight = 3.5;

const combinedHeight = box1 + box2;

const itFit = function() {
   if(combinedHeight <= truckHeight) {
    console.log(`It fit`);
   } else {
    console.log(`It does NOT fit`);
   }
}

itFit()


// access a function inside an objet

const larry = {
    name: "Larry",
    age: 20,
    friends: ["Gabriel", "Mónica", "Laura", "José"],
    greeting: "Hi, I am Larry!",
    sayGreeting: function() {
        console.log(this.greeting)
    }
}

larry.sayGreeting();

// end

// Create an object that describes something of your choosing, like a car or animal.
// Give that object 5 key/value pairs that include all primitive and complex data types
// Give the object 1 method that uses the 'this' keyword to console log something from the object when called
// console.log 2 properties from the object, once with 'dot' notation and once with 'bracket' notation.

const myCar = {
    brand: "BMW",
    color: "black",
    model: 2018,
    features: ["horn","electrical windows", "automatic doors", "USB", "GPS", "voice assitance"],
    hasInsurance: true,
    honkSound: "Cuaaackkk!!!",
    activateHonkSound: function() {
        console.log(this.honkSound)
    }
}

myCar.activateHonkSound();
console.log(myCar.brand);
console.log(myCar["model"]);

//////////////////
// Conditionals //
//////////////////

// How we ask our program a question about our data and then run a specific set of code depending on the answer.

const color = "brown"

if(color === "blue") {
    console.log(`It's blue!`);
} else if (color === "brown") {  // you can add as many 'else if' you need
    console.log(`It's brown`);
} else if (color === "black") {
    console.log(`It's black!`)
} else {
    console.log(`Color is not blue or brown`)
}

// check if username and password are correct

const username = "rick123"
const password = "aL8#klf0"

// if(username === username && password === password) {
//     console.log(`Access allowed!`)
// } else {
//     console.log(`Access denied!`)
// }

// return different messages if some of them are incorrect
if(username !== 'rick123') {
    console.log(`Username is incorrect`)
} else if (password !== 'aL8#klf0') {
    console.log(`Your password is incorrect`)
} else {
    console.log(`Everything is correct`)
}

// end

/////////////////////
// Logic Operators //
/////////////////////

// Another category in the operator family

// 3 main logic operators

const username2 = "joe"
const password2 = "joe123"

// And
// &&
// if(username === "jo" && password === "joe123"){
//     console.log("Access granted")
// } else {
//     console.log("Username or password are incorrect")
// }

// Or
// ||
if(!username2 || !password2){
    console.log("Please provide username and password")
} else if (username2 === "joe" && password2 === "joe123"){
    console.log("Access granted")
} else {
    console.log("Access denied. Check username and password")
}


// Negation
// !

/////////////////////////
/// FOR LOOPS ///////////
////////////////////////

// Count to 100 mississippi
for(let i = 0; i <= 100; i++) {
    console.log(`${i} mississippi`);
}

// for loops with arrays

const europe = ['Czech Republic', 'Greece', 'Germany', 'Scotlan', 'Sweeden', 'Italy', 'Spain', 'Portugal'];

for ( let two = 0; two < europe.length; two++) {
    console.log(europe[two]);
}
