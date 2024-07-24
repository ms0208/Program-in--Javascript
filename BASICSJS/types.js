// primitive and refernces
// primitive = number,string, undefined , boolean
// reference = [] () {}
// any value in which we copy a other value are not exact that value
// it is a refences which passing a original value.
//A value which is get copy of a another value get a exact copy is primitive
var a = 12;//primitive
var b = a;
console.log(b);

b = b+2;
console.log(b);
var c = [1,2,3,4];//refernces
var d = c;// d is refernces of c
d.pop();
console.log(d);
console.log(c);