import { verProductos } from "../api.js";

let contenedorDelCarousel = document.querySelector("#header--div__carousel");

export function crearCarousel() {
  const contenedor = document.createElement("div");

  verProductos().then((data) => {
    if (!data || data.length === 0) return;

    const itemsHTML = data
      .map((producto, index) => `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
          <img src="${producto.image}" class="d-block h-100" alt="${producto.title}">
        </div>
      `)
      .join("");

    contenedor.innerHTML = `
      <div id="carouselContenedor" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          ${itemsHTML}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselContenedor" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselContenedor" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    `;

    contenedorDelCarousel.innerHTML = contenedor.innerHTML;
  });
}
