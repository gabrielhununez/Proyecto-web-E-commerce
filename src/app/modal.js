
export function CrearModal(producto) {
    const contenidoModal = document.querySelector("#contenido-modal-dinamico");

    contenidoModal.innerHTML = `
        <div class="modal-header">
            <h5 class="modal-title" id="modalTitle">${producto.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="${producto.image}" class="img-fluid mb-3" style="height: 250px; object-fit: contain;">
            <p>${producto.description}</p>
            <p><strong>$${producto.price}</strong></p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary">Agregar al carrito</button>
        </div>
    `;

    const modalBootstrap = new bootstrap.Modal(document.getElementById("myModal"));
    modalBootstrap.show();
};
