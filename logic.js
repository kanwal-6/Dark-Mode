let search = document.querySelector("#searched");
let cards = document.querySelectorAll(".cards");
let btn = document.querySelector("#search");

btn.addEventListener("click", () => {
    let filter = search.value.trim().toLowerCase();
    console.log(search.value);
    cards.forEach((card) => {
        let cardText = card.textContent.trim().toLowerCase();
        if (cardText.includes(filter)) {
            card.classList.add("show");
            card.classList.remove("hide");
        }
        else {
            card.classList.remove("show");
            card.classList.add("hide");
        }
    });
});


// =============darkmode=============

let button = document.getElementById("mybtn");
let body = document.body;

// Check if dark mode is already enabled
if (localStorage.getItem("darkMode") === "true") {
  body.classList.add("dark-mode");
}

button.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
});






// ==================cursorjs=======================

let cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        cursor.style.height = "50px";
        cursor.style.width = "50px";
        cursor.style.border = "3px solid white";
    });
    card.addEventListener("mouseleave", () => {
        cursor.style.height = "20px";
        cursor.style.width = "20px";
        cursor.style.border = "1px solid black";
    });
});


// ==========================togglenavjs========================


function toggleNav() {
    let navbar = document.querySelector("nav");

    navbar.classList.toggle("visible");
}



