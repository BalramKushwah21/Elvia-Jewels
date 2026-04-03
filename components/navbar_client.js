'use client';
export function navbar_open() {
    const links = document.querySelector(".navbar-links");
    links.classList.add("active");
}

export function navbar_close() {
    const links = document.querySelector(".navbar-links");
    links.classList.remove("active");
}

