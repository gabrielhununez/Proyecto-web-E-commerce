import { verProductos } from "../api.js";

let contenedorDelCarousel = document.querySelector("#header--div__carousel");

export function crearCarousel() {
  const contenedor = document.createElement("div");

  verProductos().then((data) => {
    if (!data || data.length === 0) return;

    const itemsHTML = data
      .map((producto, index) => `
      <div class="carousel-item ${index === 0 ? "active" : ""}">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 text-center">
              <img src="${producto.image}" class="img-fluid" style="max-height: 400px; object-fit: contain;" alt="${producto.title}">
            </div>
            <div class="col-md-6">
              <h5>${producto.title}</h5>
              <p>${producto.description}</p>
              <p><strong>SUPER OFERTA $${producto.price}</strong></p>
            </div>
          </div>
        </div>
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
