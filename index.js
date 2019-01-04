// add solution here

var theBeatlesPlay = function (musicians, instruments){
  let out = [];
  
  for (let x = 0; x < musicians.length; x++ ){
     out.push(musicians[x] + " plays " + instruments[x]);
  }
  return out;
}

var johnLennonFacts = function (fact){
  let out = [];
  
  for (let x = 0; x < fact.length; x++){
    out[x] = fact[x] + "!!!";
  }
  return out;
}