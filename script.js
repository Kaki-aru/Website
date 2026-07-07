// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn){

menuBtn.addEventListener("click", () => {

mobileMenu.classList.toggle("active");

});

}

// ==========================
// CLOSE MENU ON LINK CLICK
// ==========================

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

link.addEventListener("click", () => {

mobileMenu.classList.remove("active");

});

});

// ==========================
// NAVBAR SCROLL EFFECT
// ==========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 40){

navbar.classList.add("nav-scrolled");

}else{

navbar.classList.remove("nav-scrolled");

}

});

// ==========================
// REVEAL ANIMATIONS
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealElements(){

const triggerBottom = window.innerHeight * 0.88;

reveals.forEach(element => {

const rect = element.getBoundingClientRect();

if(rect.top < triggerBottom){

element.classList.add("active");

}

});

}

window.addEventListener("scroll", revealElements);

window.addEventListener("load", revealElements);

// ==========================
// LIGHTBOX
// ==========================

const galleryImages = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const lightboxClose = document.getElementById("lightboxClose");

galleryImages.forEach(image => {

image.addEventListener("click", () => {

lightbox.classList.add("active");

lightboxImg.src = image.src;

});

});

if(lightboxClose){

lightboxClose.addEventListener("click", () => {

lightbox.classList.remove("active");

});

}

// CLOSE LIGHTBOX WHEN CLICKING OUTSIDE IMAGE

if(lightbox){

lightbox.addEventListener("click", (e) => {

if(e.target === lightbox){

lightbox.classList.remove("active");

}

});

}

// ==========================
// ESC KEY CLOSE
// ==========================

document.addEventListener("keydown", (e) => {

if(e.key === "Escape"){

lightbox.classList.remove("active");

mobileMenu.classList.remove("active");

}

});

// ==========================
// SMOOTH BUTTON HOVER EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

button.addEventListener("mousemove", (e) => {

const rect = button.getBoundingClientRect();

const x = e.clientX - rect.left;

const y = e.clientY - rect.top;

button.style.setProperty("--x", x + "px");

button.style.setProperty("--y", y + "px");

});

});

// ==========================
// SIMPLE PAGE LOADER
// ==========================

window.addEventListener("load", () => {

document.body.style.opacity = "1";

});

// ==========================
// PARALLAX HERO EFFECT
// ==========================

const heroLogo = document.querySelector(".hero-logo img");

window.addEventListener("scroll", () => {

const scroll = window.scrollY;

if(heroLogo){

heroLogo.style.transform =
`translateY(${scroll * 0.08}px)`;

}

});
