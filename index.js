var arr = [];

function theBeatlesPlay(musicians, instruments) {
  let arr = [];
  for (let i = 0; i < musicians.length; i++) {
   arr.push(musicians[i] + " plays " + instruments[i]); 
  }
  return arr;
}

function johnLennonFacts(facts) {
  let i = 0;
  let arr = [];
  while (i < facts.length) {
    arr.push(facts[i] + "!!!");
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num) {
  let arr = [];
  let num = 0;
  do {
    arr.push("I love the Beatles!");
    i++;
  } while (i < num);
}