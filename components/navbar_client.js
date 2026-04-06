'use client';
export function navbar_open() {
    const links = document.querySelector(".mobile_navbar");
    links.classList.add("active");
    links.style.display = "flex";
    // alert("Menu opened!"); // Debugging alert
}

export function navbar_close() {
    const links = document.querySelector(".mobile_navbar");
    links.classList.remove("active");
    links.style.display = "none";
}

