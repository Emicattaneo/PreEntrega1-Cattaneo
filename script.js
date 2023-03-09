class Producto {
    constructor(nombre, precio, suma) {
        this.nombre = nombre;
        this.precio = precio;
        this.suma = suma;
    }
}

/* BASE DE DATOS DE MARCAS Y PRECIO FIJO */
const volkswagen = new Producto("Volkswagen", 33100, 7000000);
const ford = new Producto("Ford", 21840, 7000000);
const renault = new Producto("Renault", 32220, 7000000);
const chevrolet = new Producto("Chevrolet", 24750, 7000000);
const peugeot = new Producto("Peugeot", 33845, 7000000);
const fiat = new Producto("Fiat", 22530, 7000000);

const arrayProductos = [volkswagen, ford, renault, chevrolet, peugeot, fiat];

const contenedorInformacion = document.getElementById("contenedorInformacion")

const divInformacion = document.createElement("div");
divInformacion.innerHTML = `<form id="formulario">
                        <h2> Cual es la marca de tu auto? </h2>
                        <p>Elija año de nacimiento: 1940 - 2006</p>
                        <input type="number" min="1940" max="2006" id="nacimientoUsuario">
                        
                        <p>Elija año de vehículo: 2003 - 2023</p>
                        <input type="number" min="2003" max="2023" step="1" id="anioAuto"/>

                        <p>Escriba la marca de su auto: Volkswagen, Ford, Chevrolet, Peugeot, Renault, Fiat.</p>
                        <input type="text" id="marcaUsuario">
                        <input type="submit" value="Enviar">
                        </form>`;
contenedorInformacion.appendChild(divInformacion);

let informacion = document.getElementById("formulario");

informacion.addEventListener("submit", calcularInformacion);
function calcularInformacion(e) {
    e.preventDefault();
    
    let edadUsuario = 2023 - nacimientoUsuario.value;
    console.log(edadUsuario);
    let anioAutoUsuario = anioAuto.value;
    console.log(anioAutoUsuario)
    let eleccionProducto = marcaUsuario.value;
    console.log(eleccionProducto);
   
    const arrayProductosTarifas = arrayProductos.map((Producto) => {
        if (anioAutoUsuario < 2008) {
            return {
                nombre: Producto.nombre,
                precio: (Producto.precio * 1.18),
                suma: (Producto.suma / 1.68)
            }
        } else if (anioAutoUsuario > 2008 && anioAutoUsuario < 2014) {
            return {
                nombre: Producto.nombre,
                precio: (Producto.precio * 1.23),
                suma: (Producto.suma / 1.45)
            }
        } else if (anioAutoUsuario > 2014) {
            return {
                nombre: Producto.nombre,
                precio: (Producto.precio * 1.37),
                suma: (Producto.suma / 1.12)
            }
        }
        if (edadUsuario > 17 && edadUsuario < 24) {
            return {
                nombre: Producto.nombre,
                precio: (Producto.precio * 1.35),
                suma: Producto.suma
            }
        } else {
            return {
                nombre: Producto.nombre,
                precio: (Producto.precio * 1.22),
                suma: Producto.suma
            }
        }
    })
    
    console.log("Base de datos:");
    console.log(arrayProductos);
    console.log("Base de datos modificados:");
    console.log(arrayProductosTarifas);
    
    const buscar = arrayProductosTarifas.find(Producto => Producto.nombre === eleccionProducto);
    console.log("Datos para el usuario:");
    console.log(buscar);
}