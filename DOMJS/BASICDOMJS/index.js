// 4 pillears Of DOM
//1. Selection of an element = html->JS
// 2. Changing HTML
//3. Changing CSS
//4. Event Listener

var a = document.querySelector(".m1")
console.log(a);

var b = document.querySelector(".m2")
b.innerHTML = "Manav There"

var c = document.querySelector(".m3")
c.style.color="red";
c.style.backgroundColor="black";

var d = document.querySelector(".m4")
d.addEventListener("click",function(){
    d.innerHTML = "Pranav here";
    alert("Hi");
    d.style.backgroundColor="Green";
})