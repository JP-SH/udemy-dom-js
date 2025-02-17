const allLis = document.querySelectorAll('li');
const colours = ['red','orange','yellow','green','blue','purple'];

// printing the content of the Li's
// for (let i = 0; i < allLis.length; i++) {
//   console.log(allLis[i].innerText)
// }

// changing the content of the Li's
// for (let i = 0; i < allLis.length; i++) {
//   allLis[i].innerText = 'Pep Guardiola';
// }

// changing the html
// for (let li of allLis) {
//   li.innerHTML = 'Pep Guardiola is the <b> GOAT! </b>'
// }

// changing the colour of the Li's
// allLis.forEach((li, i) => {
//   const colour = colours[i];
//   li.style.color = colour;
// })


const todo = document.querySelector('#todos .todo')

// todo.style.color = 'gray';
// todo.style.textDecoration = 'line-through';
// todo.style.opactiy = '50%';
// writing it here makes this apply straight away rather than when 'X' has been selected. It also is not useful when you want to apply it to multiple properties. Instead create a class in CSS
