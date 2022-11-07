const landingPageVideo = document.getElementById("videoLandingPage");

landingPageVideo.style.width = innerWidth;
landingPageVideo.addEventListener('contextmenu', (event) => {
    console.log(event)
    event.preventDefault();
}, false);