export function cargarCarritoEnOffcanvas() {
    const contenedor = document.getElementById("contenidoCarrito");

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    if (carrito.length === 0) {
        contenedor.innerHTML = "<p>El carrito está vacío.</p>";
        return;
    }

    const productosHTML = carrito
        .map((producto) => `
        <div class="card mb-2">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${producto.image}" class="img-fluid rounded-start" alt="${producto.title}">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${producto.title}</h5>
                        <p class="card-text">$${producto.price} x ${producto.cantidad}</p>
                        <p class="card-text"><small class="text-muted">Total: $${(producto.price * producto.cantidad).toFixed(2)}</small></p>
                    </div>
                </div>
            </div>
        </div>
    `)
    .join("");

    contenedor.innerHTML = productosHTML;
}

document.addEventListener("DOMContentLoaded", () => {
    const offcanvasEl = document.getElementById("offcanvasCarrito");
    if (offcanvasEl) {
        offcanvasEl.addEventListener("show.bs.offcanvas", () => {
            cargarCarritoEnOffcanvas();
        });
    }
});
