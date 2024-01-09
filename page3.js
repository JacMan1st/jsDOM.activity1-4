// // // ACTIVITY 3 // // // 
const colourHead = document.getElementById("colourHead");
const inputBox = document.getElementById("inputBox");
const colourButt = document.getElementById("colourButt");

colourButt.addEventListener("click", () => {
    colourHead.style.color = inputBox.value;
    inputBox.value = "";
})