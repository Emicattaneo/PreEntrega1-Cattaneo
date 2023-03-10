class Productos {
    constructor(marca, precio, suma) {
        this.marca = marca;
        this.precio = precio;
        this.suma = suma;
    }
}

/* BASE DE DATOS DE MARCAS Y PRECIOS */
const volkswagen = new Productos("Volkswagen", 33100, 8000000);
const ford = new Productos("Ford", 21840, 7200000);
const renault = new Productos("Renault", 32220, 8700000);
const chevrolet = new Productos("Chevrolet", 24750, 6900000);
const peugeot = new Productos("Peugeot", 33845, 7500000);
const fiat = new Productos("Fiat", 22530, 67000000);

const arrayProductos = [volkswagen, ford, renault, chevrolet, peugeot, fiat];

const contenedorInformacion = document.getElementById("divDOM")

/* ESTRUCTURA DEL HTML: BOTONES PARA LAS MARCAS, DOS INPUT TIPO NUMERICOS PARA EL AÑO DEL AUTO Y EDAD DEL USUARIO*/
const divInformacion = document.createElement("div");
divInformacion.innerHTML = `<form id="formulario">
                        <h2> Cual es la marca y el año de tu auto? </h2>
                        <p>Elija la marca de su auto:</p>
                        <input type="button" value="Volkswagen" id="btnVolkswagen">
                        <input type="button" value="Ford" id="btnFord">
                        <input type="button" value="Chevrolet" id="btnChevrolet">
                        <input type="button" value="Peugeot" id="btnPeugeot">
                        <input type="button" value="Renault" id="btnRenault">
                        <input type="button" value="Fiat" id="btnFiat">

                        <p>Elija/Escriba el año del vehículo: (Hasta 20 años de antiguedad)</p>
                        <input type="number" min="2003" max="2023" step="1" id="entradaAnioAuto"/>

                        <p>Elija el año de su nacimiento: (Debe ser mayor de 17 años y hasta 83 años)</p>
                        <input type="number" min="1940" max="2006" id="entradaEdadUsuario">
                        <input type="submit" value="Enviar">
                        </form>`;
contenedorInformacion.appendChild(divInformacion);

let informacion = document.getElementById("formulario");

/* EL EVENTO ONCLICK ASIGNA A marcaUsuario LA MARCA QUE EILGIO Y LA GUARDA EN EL NAVEGADOR DE FORMA LOCAL COMO marcaAutoUsuario */
let botonV = document.getElementById("btnVolkswagen")
botonV.onclick = () => {sessionStorage.setItem('marcaAutoUsuario', marcaUsuario = botonV.value)}

let botonF = document.getElementById("btnFord")
botonF.onclick = () => { sessionStorage.setItem('marcaAutoUsuario', marcaUsuario = botonF.value)}

let botonC = document.getElementById("btnChevrolet")
botonC.onclick = () => { sessionStorage.setItem('marcaAutoUsuario', marcaUsuario = botonC.value)}

let botonP = document.getElementById("btnPeugeot")
botonP.onclick = () => { sessionStorage.setItem('marcaAutoUsuario', marcaUsuario = botonP.value)}

let botonR = document.getElementById("btnRenault")
botonR.onclick = () => { sessionStorage.setItem('marcaAutoUsuario', marcaUsuario = botonR.value)}

let botonFi = document.getElementById("btnFiat")
botonFi.onclick = () => { sessionStorage.setItem('marcaAutoUsuario', marcaUsuario = botonFi.value)}


/* CON LOS DATOS DEL USUARIO Y LA BASE DE DATOS SE CALCULA EL COSTO DEL SEGURO */
informacion.addEventListener("submit", calcularInformacion);
function calcularInformacion(e) {
    e.preventDefault();

    /* ASIGNO LA INFORMACION A DIFERENTES VARIABLES, SE GUARDAN DE FORMA LOCAL Y TAMBIEN SEN IMPRIMEN EN CONSOLA*/
    let edadUsuario = 2023 - entradaEdadUsuario.value;
    sessionStorage.setItem('edadUsuario', edadUsuario);
    console.log(edadUsuario);

    let anioAutoUsuario = entradaAnioAuto.value;
    sessionStorage.setItem('añoAutoUsuario', anioAutoUsuario);
    console.log(anioAutoUsuario);

    
    const arrayProductosTarifas = arrayProductos.map((Productos) => {
        /* CON EL AÑO DEL AUTO SE MODIFICAN LOS COSTOSXMES Y LA SUMA ASEGURADA EN LA BASE DE DATOS */
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
        /* CON LA EDAD DEL USUARIO SE MODIFICAN UN POCO MAS LOS COSTOSXMES EN LA BASE DE DATOS */
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

    /* IMPRIMO LOS DATOS EN CONSOLA QUE SOLO SE LE MUESTRA AL USUARIO BUSCANDO EN EL ARRAY MODIFICADO USANDO LA VARIABLE DE LA MARCA QUE ELIGIO EL USUARIO */
    const buscar = arrayProductosTarifas.find(Productos => Productos.marca === marcaUsuario);
    console.log("Datos para el usuario:");
    console.log(buscar);

    /* ASIGNO LOS COSTOS DEL USUARIO A DIFERENTES VARIABLES */
    var precioUsuario = buscar.precio;
    var sumaUsuario = buscar.suma;

    /* SE CREA OTRO DIV Y SE INFORMA DE LOS COSTOS FINALES EN EL HTML*/
    let contenedor = document.createElement("div")
    contenedor.innerHTML = `<p> El seguro completo para su auto ${marcaUsuario} cuesta $${precioUsuario.toFixed(2)} por mes y esta asegurado por $${sumaUsuario.toFixed(2)}</p>`;

    document.body.appendChild(contenedor);
}