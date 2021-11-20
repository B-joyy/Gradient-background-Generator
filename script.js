const body = document.getElementById("gradient");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const css = document.querySelector("h3");

window.onLoad = changeGradient();

function changeGradient() {
	body.style.background = `
		linear-gradient(to right, ${color1.value} , ${color2.value})
	`;
    css.textContent = `${body.style.background};`
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
