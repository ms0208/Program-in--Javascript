// to store a multiple value in a variable.

var a = [1, 2, 3, 4, 5];
for (i = 0; i < a.length; i++) {
    console.log(a[i]);
}
// push pop shift unshift
var b = [2, 3, 4, 5, 6]
b.push(7);
b.pop(3);
b.unshift(1);
for (i = 0; i < b.length; i++) {
    console.log(b[i]);
}
b.shift();
for (i = 0; i < b.length; i++) {
    console.log(b[i]);
}
b.splice(3,2)
for (i = 0; i < b.length; i++) {
    console.log(b[i]);
}