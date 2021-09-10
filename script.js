const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const progress = document.querySelector(".progress");


const circles = document.querySelectorAll(".circle");

let currentVal = 1;
next.addEventListener('click', () => {
    currentVal++;
    if (currentVal > circles.length) {
        currentVal = circles.length;
    }
    update()
})
prev.addEventListener('click', () => {
    currentVal--;
    if (currentVal < 1) {
        currentVal = 1;
    }
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentVal) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll(".active")
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

    if (currentVal === 1){
        prev.disabled = true;
    }else if (currentVal === circles.length){
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}