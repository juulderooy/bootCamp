var nr = 1;
var str = 5;
var bool = true;
var strNr = "1200";

function add(a,b) {
  console.log(typeof(a) + "+" + typeof(b) + "+" +  typeof(a+b));
}

add(nr,str);
add(nr,bool);
add(str,bool);
add(strNr,nr);
add(nr,nr);
