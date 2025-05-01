document.getElementById("animateBtn").addEventListener("click", function() {
    this.classList.add("animate");
    setTimeout(() => this.classList.remove("animate"), 500);
});

const themePicker = document.getElementById("themePicker");
const statusText = document.getElementById("status");

themePicker.addEventListener("input", () => {
    const color = themePicker.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("bgColor", color);
    statusText.textContent = `Background updated to ${color}`;
});

window.addEventListener("load", () => {
    const savedColor = localStorage.getItem("bgColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        themePicker.value = savedColor;
        statusText.textContent = `Loaded previous color: ${savedColor}`;
    }
});
