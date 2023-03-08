{
    class Producto {
        constructor(marca, precio, suma) {
            this.id = id;
            this.marca = marca;
            this.precio = precio;
            this.suma = suma;
        }
    }

    const volkswagen = new Producto(0, "Volkswagen", 33100, 7000000);
    const ford = new Producto(1, "Ford", 21840, 7000000);
    const renault = new Producto(2, "Renault", 32220, 7000000);
    const chevrolet = new Producto(3, "Chevrolet", 24750, 7000000);
    const peugeot = new Producto(4, "Peugeot", 33845, 7000000);
    const fiat = new Producto(5, "Fiat", 22530, 7000000);

    const arrayProductos = [volkswagen, ford, renault, chevrolet, peugeot, fiat]

    const contenedorProductos = document.getElementById("contenedorProductos")

    arrayProductos.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML =`<p> Nombre : ${producto.nombre} </p>
                        <p> Precio : ${producto.precio} </p>
                        <button> Agregar al carrito </button>`;
                        contenedorProductos.appendChild(div);
    })
}