export function verProductos() {
	return fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.then((data) => data);
}

export function verCategorias() {
	fetch("https://fakestoreapi.com/products/categories")
		.then((res) => res.json())
		.then((data) => data);
}

