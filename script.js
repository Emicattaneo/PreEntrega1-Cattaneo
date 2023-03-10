class Productos {
    constructor(marca, precio, suma) {
        this.marca = marca;
        this.precio = precio;
        this.suma = suma;
    }
}

/* BASE DE DATOS DE MARCAS Y PRECIOS */
const volkswagen = new Productos("Volkswagen", 33100, 7000000);
const ford = new Productos("Ford", 21840, 7000000);
const renault = new Productos("Renault", 32220, 7000000);
const chevrolet = new Productos("Chevrolet", 24750, 7000000);
const peugeot = new Productos("Peugeot", 33845, 7000000);
const fiat = new Productos("Fiat", 22530, 7000000);

const arrayProductos = [volkswagen, ford, renault, chevrolet, peugeot, fiat];

const contenedorInformacion = document.getElementById("divDOM")

/* ESTRUCTURA DEL HTML */
const divInformacion = document.createElement("div");
divInformacion.innerHTML = `<form id="formulario">
                        <h2> Cual es la marca y el año de tu auto? </h2>
                        <p>Escriba la marca de su auto: Volkswagen, Ford, Chevrolet, Peugeot, Renault, Fiat.</p>
                        <input type="text" id="entradaMarcaUsuario">

                        <p>Elija el año del vehículo: (Hasta 20 años de antiguedad)</p>
                        <input type="number" min="2003" max="2023" step="1" id="entradaAnioAuto"/>

                        <p>Elija el año de su nacimiento: (Debe ser mayor de 17 años y hasta 83 años)</p>
                        <input type="number" min="1940" max="2006" id="entradaEdadUsuario">
                        <input type="submit" value="Enviar">
                        </form>`;
contenedorInformacion.appendChild(divInformacion);

let informacion = document.getElementById("formulario");

/* CON LOS DATOS DEL USUARIO Y LA BASE DE DATOS SE CALCULA EL COSTO DEL SEGURO */
informacion.addEventListener("submit", calcularInformacion);
function calcularInformacion(e) {
    e.preventDefault();

    /* ASIGNO LA INFORMACION A DIFERENTES VARIABLES */
    let edadUsuario = 2023 - entradaEdadUsuario.value;
    console.log(edadUsuario);
    sessionStorage.setItem('edadUsuario', edadUsuario);

    let anioAutoUsuario = entradaAnioAuto.value;
    console.log(anioAutoUsuario);
    sessionStorage.setItem('añoAutoUsuario', anioAutoUsuario);

    let marcaUsuario = entradaMarcaUsuario.value;
    console.log(marcaUsuario);
    sessionStorage.setItem('marcaAutoUsuario', marcaUsuario);

    /* CON LA EDAD DEL USUARIO Y EL AÑO DEL AUTO SE MODIFICAN LOS COSTOS EN LA BASE DE DATOS */
    const arrayProductosTarifas = arrayProductos.map((Productos) => {
        if (anioAutoUsuario < 2008) {
            return {
                marca: Productos.marca,
                precio: (Productos.precio * 1.18),
                suma: (Productos.suma / 1.68)
            }
        } else if (anioAutoUsuario > 2008 && anioAutoUsuario < 2014) {
            return {
                marca: Productos.marca,
                precio: (Productos.precio * 1.23),
                suma: (Productos.suma / 1.45)
            }
        } else if (anioAutoUsuario > 2014) {
            return {
                marca: Productos.marca,
                precio: (Productos.precio * 1.37),
                suma: (Productos.suma / 1.12)
            }
        }

        if (edadUsuario > 17 && edadUsuario < 24) {
            return {
                marca: Productos.marca,
                precio: (Productos.precio * 1.35),
                suma: Productos.suma
            }
        } else {
            return {
                marca: Productos.marca,
                precio: (Productos.precio * 1.22),
                suma: Productos.suma
            }
        }
    })

    /* IMPRIMO LOS DATOS EN CONSOLA PARA VERIFICAR QUE SE MODIFICO */
    console.log("Base de datos:");
    console.log(arrayProductos);
    console.log("Base de datos modificados por los datos entregados:");
    console.log(arrayProductosTarifas);

    /* IMPRIMO LOS DATOS EN CONSOLA QUE SOLO SE LE MUESTRA AL USUARIO */
    const buscar = arrayProductosTarifas.find(Productos => Productos.marca === marcaUsuario);
    console.log("Datos para el usuario:");
    console.log(buscar);

    /* ASIGNO LOS COSTOS DEL USUARIO A DIFERENTES VARIABLES */
    var precioUsuario = buscar.precio;
    var sumaUsuario = buscar.suma;

    /* SE CREA OTRO DIV EN HTML Y SE INFORMA DE LOS COSTOS FINALES */
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<p> El seguro completo para su auto ${marcaUsuario} cuesta $${precioUsuario.toFixed(2)} por mes y esta asegurado por $${sumaUsuario.toFixed(2)}</p>`;

    document.body.appendChild(contenedor);
}