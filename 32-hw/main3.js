// 3

const circles = document.querySelectorAll(".circle");
console.log(circles);
let activeLight = 0;

setInterval(() => {
    changeLights();


}, 1500);

function changeLights() {
    circles[activeLight].className = "circle";
    activeLight++;

    if (activeLight > 2) {
        activeLight = 0;
    }

    const currentLight = circles[activeLight];
    currentLight.classList.add(currentLight.getAttribute('color'))
}