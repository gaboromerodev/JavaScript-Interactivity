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