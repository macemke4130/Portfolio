console.log("Thanks for looking!");

const button = document.getElementById("mode-toggle");
const body = document.body;
const h1 = document.getElementsByTagName("h1")[0];
const h2 = document.getElementsByTagName("h2")[0];
const p = document.getElementsByTagName("p");
const link = document.getElementsByClassName("white-link")[0];
const nav = document.getElementsByTagName("nav")[0];
const hamburger = document.getElementById("hamburger");

const mediaQuery = window.matchMedia('(min-width: 850px)');

const styleToggle = () => {
    if (button.innerHTML === "Color Mode") {
        toggleColor();
    } else {
        toggleDark();
    }
}

const toggleColor = () => {
    mode = 1;
    button.innerHTML = "Dark Mode";
    body.style.backgroundColor = "pink";
    h1.style.color = "yellow";
    h2.style.color = "yellow";
    link.style.color = "black";
    hamburger.style.backgroundColor = "gold";
    
    if (nav.style.display != "flex") {
        nav.style.backgroundColor = "pink";
    } else {
        nav.style.backgroundColor = "gold";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "black";
    }
}

const toggleDark = () => {
    mode = 0;
    button.innerHTML = "Color Mode";
    body.style.backgroundColor = "darkslategray";
    h1.style.color = "white";
    h2.style.color = "white";
    link.style.color = "white";
    hamburger.style.backgroundColor = "slategray";
    nav.style.backgroundColor = "darkslategray";

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "white";
    }
}

let mobileMenu = 0;

const menuToggle = () => {
    if (nav.style.display != "flex") {
        nav.style.display = "flex";
    } else {
        nav.style.display = "none";
    }
}

// const windowSize = (e) => {
//   if (e.matches) {
//     nav.style.display = "flex";
//   }
// }

// mediaQuery.addListener(windowSize);
// windowSize(mediaQuery);