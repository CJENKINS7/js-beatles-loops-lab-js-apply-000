function theBeatlesPlay(musicians, instruments) {
var array = [];
var action = 'plays'
for (var i = 0; i < musicians.length; i++) {
  array.push(musicians[i] + action + instruments[i]);
  }
  return array
}


function johnLennonFacts(facts) {
  var Lennonfacts = [];
  var i = 0;
  while (i < facts.length) {
    Lennonfacts.push(facts[i] + "!!!");
    i++;
  }
  return Lennonfacts;
}

function iLoveTheBeatles(n){
var array = [];
do {
  array.push('I love the Beatles!')
  n++;
}  while (n < 15);
return array;
}
//n = number of times to say 'I love the Beatles'
//n = 15
//n < needs to be less than 15 to help return array
