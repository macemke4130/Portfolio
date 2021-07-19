console.log("Thanks for looking!");

const button = document.getElementById("mode-toggle");
const body = document.body;
const h1 = document.getElementsByTagName("h1")[0];
const h2 = document.getElementsByTagName("h2");
const h3 = document.getElementsByTagName("h3");
const p = document.getElementsByTagName("p");
const job = document.getElementsByClassName("job");
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
    button.innerHTML = "Dark Mode";
    body.style.backgroundColor = "pink";
    h1.style.color = "yellow";
    hamburger.style.backgroundColor = "gold";

    if (nav.style.display === "flex" || nav.style.display === "") {
        nav.style.backgroundColor = "pink";
    } else {
        nav.style.backgroundColor = "gold";
    }

    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = "yellow";
    }

    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = "yellow";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "black";
    }

    for (let i = 0; i < job.length; i++) {
        job[i].style.textShadow = "none";
    }
}

const toggleDark = () => {
    button.innerHTML = "Color Mode";
    body.style.backgroundColor = "darkslategray";
    h1.style.color = "white";
    // link.style.color = "white";
    hamburger.style.backgroundColor = "slategray";
    nav.style.backgroundColor = "darkslategray";

    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = "white";
    }

    for (let i = 0; i < h3.length; i++) {
        h3[i].style.color = "white";
    }

    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "white";
    }

    for (let i = 0; i < job.length; i++) {
        job[i].style.textShadow = "0.1em 0.1em 0.1em black";
    }
}

const menuToggle = () => {
    if (nav.style.display === "none" || nav.style.display === "") {
        // Show Mobile Navigation --
        nav.style.display = "flex";
        body.style.overflow = "hidden";
    } else {
        // Hide Mobile Navigation --
        nav.style.display = "none";
        body.style.overflow = "visible";
    }
}

const windowSize = (e) => {
    if (e.matches) {
        // Show Mobile Navigation --
        nav.style.display = "flex";
        if (body.style.backgroundColor === "pink") {
            nav.style.backgroundColor = "pink";
        }
    } else {
        // Hide Mobile Navigation --
        nav.style.display = "none";
        body.style.overflow = "visible";
        console.log("Hide Mobile");
    }
}

mediaQuery.addListener(windowSize);