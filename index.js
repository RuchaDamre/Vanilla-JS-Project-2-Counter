let count = document.getElementById("count");
let reset = document.getElementById("reset");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");

count.innerHTML = "0";
var value = 0;

reset.addEventListener('click', function () {
    value = 0;
    count.innerHTML = "0";
    count.style.color = "black";
})

increase.addEventListener('click', function () {
    for (let i = 0; ; i++) {
        value++;
        count.innerHTML = value;
        if (value < 0) {
            count.style.color = "red";
        }
        else if (value > 0) {
            count.style.color = "blue";
        }
        else {
            count.style.color = "black";
        }
        break;
    }
})

decrease.addEventListener('click', function () {
    for (let i = 0; ; i++) {
        value--;
        count.innerHTML = value;
        if (value < 0) {
            count.style.color = "red";
        }
        else if (value > 0) {
            count.style.color = "blue";
        }
        else {
            count.style.color = "black";
        }
        break;
    }
})


