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
