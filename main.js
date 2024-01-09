// document.getElementById("picButton").addEventListener('click', () => {
//     console.log('clicked');
    
// });

// // // MOVED JS FOR EACH PAGE TO MAKE IT WORK

// // // activity 1 // // //
const buttonImage = document.getElementById("carPic");

document.getElementById("picButton").addEventListener("click", () => {
    if (buttonImage.style.background === "none" || buttonImage.style.background === "flex") {
        buttonImage.style.background = "";
    } else {
        buttonImage.style.background = "none";
    }
});


// // // /activity 2 /// // //
const furyImage = document.getElementById("furyImage");
const inputURL = document.getElementById("inputURL");
const imgToChange = document.getElementById("imgToChange");

imgToChange.addEventListener("click", () => {
    furyImage.src = inputURL.value;
    inputURL.value = "";
})

// // // ACTIVITY 3 // // // 
const colourHead = document.getElementById("colourHead");
const inputBox = document.getElementById("inputBox");
const colourButt = document.getElementById("colourButt");

colourButt.addEventListener("click", () => {
    colourHead.style.color = inputBox.value;
    inputBox.value = "";
})

// // // ACTIVITY 4 // // //
document.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const coordsPara = document.getElementById("coordinates");
    coordsPara.textContent = `You clicked at coordinates X: ${x} and Y: ${y}`;
});