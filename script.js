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
function startUrgencyCountdown() {
  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  const stored = localStorage.getItem("cd_end");
  let end = stored ? parseInt(stored, 10) : NaN;

  if (isNaN(end) || end <= Date.now()) {
    end = Date.now() + 10 * 60 * 1000; // 10 minutos
    localStorage.setItem("cd_end", end);
  }

  const update = () => {
    const diff = Math.max(0, end - Date.now());
    const min = Math.floor(diff / 60000);
    const sec = Math.floor((diff % 60000) / 1000);
    countdownEl.innerText = `⏳ Oferta acaba em ${min}:${sec < 10 ? "0" + sec : sec}`;

    if (diff > 0) {
      setTimeout(update, 1000);
    }
  };

  update();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startUrgencyCountdown);
} else {
  startUrgencyCountdown();
}

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