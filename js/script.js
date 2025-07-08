const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('main-header');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Carrusel JS suave con 30 segundos por imagen
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
let index = 0;

function showSlide(i) {
  if (i >= totalSlides) index = 0;
  else if (i < 0) index = totalSlides - 1;
  else index = i;

  slides.style.transform = `translateX(${-index * 100}vw)`;
}

// Mostrar la primera imagen desde inicio
showSlide(index);

// Avanza slide cada 30 segundos
setInterval(() => {
  showSlide(index + 1);
}, 30000);
