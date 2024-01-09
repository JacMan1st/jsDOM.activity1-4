// // // /activity 2 /// // //
const furyImage = document.getElementById("furyImage");
const inputURL = document.getElementById("inputURL");
const imgToChange = document.getElementById("imgToChange");

imgToChange.addEventListener("click", () => {
    furyImage.src = inputURL.value;
    inputURL.value = "";
})
