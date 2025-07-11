// Toggle menú hamburguesa
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const header = document.getElementById('main-header');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Carrusel automático con texto dinámico
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;
const textos = [
  "Pixel a pixel, creamos tu éxito.",
  "Lleva tu negocio a la órbita digital.",
  "Eficiencia, ahorro y resultado.",
  "¿Sitio listo? Ahora hagamos que te vean.",
  "Más que servicio: una alianza estratégica.",
  "PixelOrbit no te deja solo. Te guía paso a paso.",
  "Tu universo digital, diseñado para despegar."
];
const textoElement = document.querySelector('.carousel-text');
let currentIndex = 0;
let intervalId = null;

function showSlide(index) {
  slides.style.transform = `translateX(-${(index * 100) / totalSlides}%)`;
  textoElement.textContent = textos[index];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

intervalId = setInterval(nextSlide, 31000); // cada 31 segundos

// Flechas de navegación manual
document.querySelector('.carousel-arrow.next').addEventListener('click', () => {
  nextSlide();
  resetInterval();
});

document.querySelector('.carousel-arrow.prev').addEventListener('click', () => {
  prevSlide();
  resetInterval();
});

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 31000);
}

// Mostrar primer slide y texto al cargar
showSlide(currentIndex);

// Particles.js
particlesJS('particles-js', {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" }
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 4,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.15,
      width: 1
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: { opacity: 0.3 }
      },
      repulse: {
        distance: 200,
        duration: 0.6
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

// Botón WhatsApp contador clicks
const whatsappBtn = document.getElementById('whatsapp-btn');
let clickCount = parseInt(localStorage.getItem('whatsappClickCount')) || 0;

whatsappBtn.addEventListener('click', () => {
  clickCount++;
  localStorage.setItem('whatsappClickCount', clickCount);
  console.log(`Botón WhatsApp clickeado ${clickCount} veces.`);
});

// Cambio de imagen en proyectos y manejo de botón activo (solo uno marcado)
const projectButtons = document.querySelectorAll('.project-btn');
const projectImage = document.getElementById('project-image');

projectButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Cambiar imagen según el botón clickeado
    const imgSrc = button.getAttribute('data-img');
    projectImage.src = imgSrc;

    // Quitar clase active a todos los botones
    projectButtons.forEach(btn => btn.classList.remove('active'));

    // Agregar clase active solo al botón clickeado
    button.classList.add('active');
  });
});


// Calificación con estrellas
const stars = document.querySelectorAll('.rating .star');
let ratingValue = 0;

stars.forEach(star => {
  star.addEventListener('click', () => {
    ratingValue = parseInt(star.getAttribute('data-value'));
    updateStars(ratingValue);
    console.log(`Usuario calificó con ${ratingValue} estrella(s).`);
    // Aquí podrías enviar este valor a un servidor o almacenarlo localmente
  });

  star.addEventListener('mouseenter', () => {
    updateStars(parseInt(star.getAttribute('data-value')));
  });

  star.addEventListener('mouseleave', () => {
    updateStars(ratingValue);
  });
});

function updateStars(value) {
  stars.forEach(star => {
    if (parseInt(star.getAttribute('data-value')) <= value) {
      star.classList.add('filled');
    } else {
      star.classList.remove('filled');
    }
  });
}

// Inicializar con 0 estrellas llenas
updateStars(ratingValue);
