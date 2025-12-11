// --- MODO OSCURO ---
document.getElementById("toggleDark").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});

// --- DATA (Productos) ---
const products = [
  { id: 1, name: "Hoodie Oversize", category: "hoodies", size: "L", color: "negro", price: 45, img: "img/h1.jpg" },
  { id: 2, name: "Camisa Urbana", category: "camisas", size: "M", color: "blanco", price: 30, img: "img/c1.jpg" },
  { id: 3, name: "Pantalón Cargo", category: "pantalones", size: "L", color: "negro", price: 55, img: "img/p1.jpg" },
  { id: 4, name: "Hoodie Minimalista", category: "hoodies", size: "S", color: "rojo", price: 40, img: "img/h2.jpg" },
  { id: 5, name: "Camisa Street", category: "camisas", size: "L", color: "negro", price: 28, img: "img/c2.jpg" },
];

// --- RENDER PRODUCTS ---
const productsContainer = document.getElementById("products");

function renderProducts(list) {
  productsContainer.innerHTML = "";

  list.forEach(p => {
    productsContainer.innerHTML += `
      <div class="border dark:border-neutral-700 rounded-lg p-3">
        <img src="${p.img}" class="w-full h-48 object-cover rounded">
        <h3 class="mt-2 font-bold">${p.name}</h3>
        <p class="text-sm opacity-70">${p.category} · ${p.color} · ${p.size}</p>
        <p class="mt-1 font-semibold">$${p.price}</p>
      </div>
    `;
  });
}

renderProducts(products);

// --- FILTRO ---
const filters = document.querySelectorAll(".filter");

filters.forEach(filter => {
  filter.addEventListener("change", applyFilters);
});

function applyFilters() {
  const activeFilters = [...filters]
    .filter(f => f.checked)
    .map(f => f.value);

  if (activeFilters.length === 0) {
    renderProducts(products);
    return;
  }

  const filtered = products.filter(p =>
    activeFilters.includes(p.category) ||
    activeFilters.includes(p.size) ||
    activeFilters.includes(p.color)
  );

  renderProducts(filtered);
}
