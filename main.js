// document.getElementById("picButton").addEventListener('click', () => {
//     console.log('clicked');
    
// });


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

