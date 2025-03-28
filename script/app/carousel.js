import { getProducts } from "../api";

let carouselContainer = document.querySelector("#carousel");

function viwCarousel(prod) {
    //let carouselImg = 
}


export function createCarousel() {
    getProducts().then((data) => {
        data.map((prod) => {
            let carousel = `
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src=${prod.image} class="d-block w-100" alt=${prod.title}>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
            `;
        })
    })
}