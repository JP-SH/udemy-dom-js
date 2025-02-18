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

const btn = document.querySelector('button');

btn.addEventListener('mouseover', function(){
  const height = Math.floor(Math.random() * innerHeight);
  const width = Math.floor(Math.random() * innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
})

btn.addEventListener('click', function(){
  btn.innerText = 'YA GOT ME';
  document.body.style.backgroundColor = 'green';
})
