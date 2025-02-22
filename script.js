const carousel = document.querySelector(".carousel");

function moveCarousel() {
    let firstImage = carousel.children[0];
    carousel.style.transition = "transform 1s linear";
    carousel.style.transform = "translateX(-20%)";

    setTimeout(() => {
        carousel.appendChild(firstImage);
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
    }, 1000);
}

setInterval(moveCarousel, 2000);
