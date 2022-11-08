const page = document.getElementById("page");
let pageWidth = screen.width, pageHeight = screen.height;

window.addEventListener("resize", resizePage());

function resizePage() {
    pageWidth = screen.width, pageHeight = screen.height;
}

const canvas = document.getElementById("landingPageResponsive");
const ctx = canvas.getContext("2d");

let canvasWidth = canvas.width, canvasHeight = canvas.height;
console.log(pageWidth + " " + pageHeight);
console.log(canvasWidth + " " + canvasHeight);
