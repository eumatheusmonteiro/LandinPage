// SCROLL
function scrollToBuy() {
document.getElementById("buy").scrollIntoView({
behavior: "smooth"
});
}

// FAQ
function toggle(el) {
let p = el.nextElementSibling;
if (p.style.display === "block") {
p.style.display = "none";
el.classList.remove("active");
} else {
p.style.display = "block";
el.classList.add("active");
}
}

// CONTADOR (URGÊNCIA)
let time = 600; // 10 minutos

setInterval(() => {
let min = Math.floor(time / 60);
let sec = time % 60;

document.getElementById("countdown").innerText =
`⏳ Oferta acaba em ${min}:${sec < 10 ? "0"+sec : sec}`;

if(time > 0) time--;

}, 1000);

// CARROSSEL
let currentIndex = 0;

function moveCarousel(n) {
  const images = document.querySelectorAll(".carousel-img");
  const dots = document.querySelectorAll(".dot");
  currentIndex += n;
  
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  
  updateCarousel();
}

function currentSlide(n) {
  currentIndex = n;
  updateCarousel();
}

function updateCarousel() {
  const images = document.querySelectorAll(".carousel-img");
  const dots = document.querySelectorAll(".dot");
  
  images.forEach((img) => img.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  
  images[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}