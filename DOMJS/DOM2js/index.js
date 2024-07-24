var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "red";
        flag = 1;
    }
    else {
        bulb.style.backgroundColor = "yellow";
        flag = 0;
    }
})
var h = document.querySelectorAll("h1")
h.forEach(function(element){
    element.addEventListener("click",function(){
        console.log(h);
    })
})