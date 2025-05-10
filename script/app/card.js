import { verProductos } from "../api.js";

let contenedorCarta = document.querySelector("#main--div__tarjetas");

export function crearCarta()
{ 
    verProductos().then((data) => {
        if (!data || data.length === 0) return;

        const itemsHTML = data.map((producto) => `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${producto.image}" class="card-img-top" alt="${producto.title}" style="height: 250px; object-fit: contain;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description.slice(0, 100)}...</p>
                    <a href="#" class="btn btn-primary mt-auto">Ver</a>
                </div>
            </div>
        </div>
    `).join("");

        contenedorCarta.innerHTML = itemsHTML;
    });
}