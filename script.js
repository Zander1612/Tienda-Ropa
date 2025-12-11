// MODO OSCURO
const darkBtn = document.getElementById("darkToggle");
const darkBtnMobile = document.getElementById("darkToggleMobile");

function toggleDark() {
    document.documentElement.classList.toggle("dark");
}

darkBtn?.addEventListener("click", toggleDark);
darkBtnMobile?.addEventListener("click", toggleDark);

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
});

// SLIDER
let current = 0;
const imgs = document.querySelectorAll(".slider-img");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

function showSlide(i) {
    imgs.forEach(img => img.classList.add("hidden"));
    imgs[i].classList.remove("hidden");
}

next.addEventListener("click", () => {
    current = (current + 1) % imgs.length;
    showSlide(current);
});

prev.addEventListener("click", () => {
    current = (current - 1 + imgs.length) % imgs.length;
    showSlide(current);
});

showSlide(0);

// FILTROS
const filterBtns = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const category = btn.dataset.filter;

        items.forEach(item => {
            if (category === "all" || item.dataset.category === category) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
            }
        });
    });
});
