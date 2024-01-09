// // // ACTIVITY 4 // // //
document.addEventListener("click", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const coordsPara = document.getElementById("coordinates");
    coordsPara.textContent = `You clicked at coordinates X: ${x} and Y: ${y}`;
});