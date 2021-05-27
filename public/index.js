console.log("Thanks for looking!");

let mode = 0;
const button = document.getElementById("mode-toggle");
const body = document.body;
const h1 = document.getElementsByTagName("h1")[0];
const h2 = document.getElementsByTagName("h2")[0];
const p = document.getElementsByTagName("p");
const link = document.getElementsByClassName("white-link")[0];

const toggle = () => {
    if (mode === 0) {
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
    
    for (let i = 0; i < p.length; i++) {
        p[i].style.color = "white";
    }
}