const myBtn = document.getElementById("btn");
const myText = document.getElementById("text")

myBtn.addEventListener("click", () => {
    myText.innerHTML = "Goodbye World";
});