
// // // activity 1 // // //
const buttonImage = document.getElementById("carPic");

document.getElementById("picButton").addEventListener("click", () => {
    if (buttonImage.style.background === "none" || buttonImage.style.background === "flex") {
        buttonImage.style.background = "";
    } else {
        buttonImage.style.background = "none";
    }
});
