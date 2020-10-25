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
   

    //make the button text equal the counter variable
    headerBtn.textContent = counter;
    console.log('it was clicked');

})


