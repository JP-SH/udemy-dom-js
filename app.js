const allLis = document.querySelectorAll('li');

// printing the content of the Li's
// for (let i = 0; i < allLis.length; i++) {
//   console.log(allLis[i].innerText)
// }

// changing the content of the Li's
// for (let i = 0; i < allLis.length; i++) {
//   allLis[i].innerText = 'Pep Guardiola';
// }

// changing the html
for (let li of allLis) {
  li.innerHTML = 'Pep Guardiola is the <b> GOAT! </b>'
}
