import { verProductos } from "../api.js"; 
import { CrearModal } from "./modal.js";

let contenedorCarta = document.querySelector("#main--section__div-cartas");

export function CrearCarta() {
    verProductos().then((data) => {
        if (!data || data.length === 0) return;

        const plantillaCarta = data
        .map((producto) => `
            <div class="col">
                <div class="card h-100">
                    <img src="${producto.image}" class="card-img-top" alt="${producto.title}" style="height: 250px; object-fit: contain;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">${producto.description.slice(0, 100)}...</p>
                        <button class="btn btn-primary mt-auto btn-ver" btn-id="${producto.id}">Ver</button>
                    </div>
                </div>
            </div>
        `)
        .join("");

        contenedorCarta.innerHTML += plantillaCarta;

        document.querySelectorAll(".btn-ver").forEach((boton) => {
            boton.addEventListener("click", () => {
                const idProducto = parseInt(boton.getAttribute("btn-id"));
                const producto = data.find(p => p.id === idProducto);
                if (producto) {
                    CrearModal(producto);
                }
            });
        });
    });
}
