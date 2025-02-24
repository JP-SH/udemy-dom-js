// the thing    event type    the code to un
// button       click         change the colour
// input        hits return   get search results
// image        mouseover     display the img caption


// const btn = document.querySelector('#clicker');

// btn.onclick = function() {
//   console.log('YOU CLICKED ME');
// }
// this is also not a recommended way to use events

// the recommeneded way to use event is-
// btn.addEventListener('click', function(){
//   alert('CLICKED!!!');
// });

// btn.addEventListener('click', function(){
//   console.log('I HAVE BEEN CLICKED!');
// });

//   btn.addEventListener('mouseover', function(){
//     btn.innerText = 'STOP TOUCHING ME';
//   });

//   btn.addEventListener('mouseover', function(){
//     btn.innerText = 'Click ME';
//   });

// creating a button that moves everytime you hover over it
// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function(){
//   const height = Math.floor(Math.random() * innerHeight);
//   const width = Math.floor(Math.random() * innerWidth);
//   btn.style.left = `${width}px`;
//   btn.style.top = `${height}px`;
// })

// btn.addEventListener('click', function(){
//   btn.innerText = 'YA GOT ME';
//   document.body.style.backgroundColor = 'green';
// })

const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const changeColour = function() {
  const h1 = document.querySelector('h1');
  h1.style.color = this.style.backgroundColor;
}

const container = document.querySelector('#boxes');

for (let colour of colours) {
  const box = document.createElement('div');
  box.style.backgroundColor = colour;
  box.classList.add('box');
  container.appendChild(box);
  box.addEventListener('click', changeColour)
}

const input = document.querySelector("#username");

input.addEventListener('keydown', function(e){
  console.log('KEY DOWN');
});

input.addEventListener('keyup', function(e){
  console.log('KEY UP');
});

input.addEventListener('keypress', function(e){
  console.log('KEY PRESS');
});

const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    if(!this.value) return;
     const newItemText = this.value;
     const newItem = document.createElement('li');
     newItem.innerText = newItemText;
     itemsUl.appendChild(newItem);
     this.value = '';
  }
})

const form = document.querySelector('#signup-form');
const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.querySelector('#veggie');



form.addEventListener('submit', function(e) {
  e.preventDefault();
  // usually when you submit a form it refershes the page or takes you to a new page. Prevent Deafult stops it from doing that and allows you to do something with the data submitted via the form
  alert('SUBMITTED FORM');
  console.log('cc', creditCardInput,value);
  console.log('cc', termsCheckbox,checked);
  console.log('cc', creditCardInput,value);
})

// this allows you to create an object that stays up to date with what the user is enterinf rather than only having the data once theyve submitted the form
const formData = {};
creditCardInput.addEventListener('input', e => {
  formData['cc'] = e.target.value;
})

veggieSelect.addEventListener('input', e => {
  formData['veggie'] = e.target.value;
})

termsCheckbox.addEventListener('input', e => {
  formData['agreeToTerms'] = e.target.checked;
})

// a shorter way to write it without hardcoding it
for (let input of [creditCardInput,termsCheckbox, veggieSelect]) {
  input.addEventListener('input', ({target}) => {
    const {name, type, value, checked} = target;
    formData[name] = type ===  'checkbox' ? checked : value;
  })
};
