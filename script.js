const backgrounds = [
    "backgrounds/Background1.jpg",
    "backgrounds/Background2.jpg",
    "backgrounds/Background3.jpg",
    "backgrounds/Background4.jpg",
    "backgrounds/Background5.jpg"
];

const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

document.querySelector(".hero").style.backgroundImage =
    `url("${randomBackground}")`;

let viewCount = localStorage.getItem("viewCount");

if (!viewCount) {
    viewCount = Math.floor(Math.random() * (2501 - 250)) + 250;

    localStorage.setItem("viewCount", viewCount);
}

document.querySelector("#view-counter").textContent =
    `${Number(viewCount).toLocaleString()} Views`;