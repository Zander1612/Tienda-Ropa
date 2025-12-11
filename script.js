const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  if (menu.classList.contains('-translate-x-full')) {
    // Mostrar menú con animación
    menu.classList.remove('-translate-x-full', 'opacity-0');
    menu.classList.add('translate-x-0', 'opacity-100');
  } else {
    // Ocultar menú con animación
    menu.classList.remove('translate-x-0', 'opacity-100');
    menu.classList.add('-translate-x-full', 'opacity-0');
  }
});

// Scroll suave al hacer clic en enlaces
document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });

    // Ocultar menú en móvil después de seleccionar
    if (window.innerWidth < 768) {
      menu.classList.remove('translate-x-0', 'opacity-100');
      menu.classList.add('-translate-x-full', 'opacity-0');
    }
  });
});

// Carrusel básico
const carousel = document.getElementById('carousel');
const slides = carousel.children;
let index = 0;

document.getElementById('next').addEventListener('click', () => {
  index = (index + 1) % slides.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
});

// Botón flotante (scroll arriba)
const floatbtn = document.getElementById('float-btn');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300){
        floatbtn.classList.remove('hidden', 'opacity-0');
        floatbtn.classList.add('opacity-100')
    } else {
        floatbtn.classList.add('opacity-0')

        setTimeout(() => {
            if (floatbtn.classList.contains('opacity-0')) {
                floatbtn.classList.add('hidden');
            }
        }, 500)
    }
});

floatbtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth'})
})

// Modo oscuro
const darkToggle = document.getElementById('dark-toggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Selecciona todos los elementos con clase "reveal"
const reveals = document.querySelectorAll('.reveal');

const options = {
  threshold: 0.1 // Se activa cuando el 10% del elemento es visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-10');
      entry.target.classList.add('opacity-100', 'translate-y-0');
    }
  });
}, options);

reveals.forEach(reveal => {
  observer.observe(reveal);
});