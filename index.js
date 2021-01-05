const names = ["Ada", "Brendan", "Ali"];

function writeCards(names, event) {
  let birthday =[];
  event = "surprise";
  for (let i= 0; i < names.length; i++) {
  birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!';
  }
  return birthday;
}

let countup = 0;
while (countup < 10) {
  console.log(countup++);
}
