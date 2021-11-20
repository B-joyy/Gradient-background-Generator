const body = document.getElementById("gradient");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const css = document.querySelector("h3");
const copyBtn = document.getElementById("copy-btn");

window.onLoad = changeGradient();

function changeGradient() {
	body.style.background = `
		linear-gradient(to right, ${color1.value} , ${color2.value})
	`;
    css.textContent = `${body.style.background};`
}

function copyCode() {
    const cb = navigator.clipboard;
    cb.writeText(css.textContent).then(() => alert('Code copied'));
}

color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);
copyBtn.addEventListener("click", copyCode)
