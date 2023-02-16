{
    /* BASE PARA EL ARRAY DE DATOS*/
    class Datos {
        constructor(marca, precio, suma) {
            this.marca = marca;
            this.precio = precio;
            this.suma = suma;
        }
    }

    /* BASE DE DATOS DE MARCAS Y PRECIO FIJO */
    const volkswagen = new Datos("Volkswagen", 33100, 7000000);
    const ford = new Datos("Ford", 21840, 7000000);
    const renault = new Datos("Renault", 32220, 7000000);
    const chevrolet = new Datos("Chevrolet", 24750, 7000000);
    const peugeot = new Datos("Peugeot", 33845, 7000000);
    const fiat = new Datos("Fiat", 22530, 7000000);

    /* ARRAY DE LOS DATOS */
    const arrayDatos = [volkswagen, ford, renault, chevrolet, peugeot, fiat];

    /* FUNCION PARA CONFIRMAR LAS CONTRASEÑAS */
    function confirmacion(valorC, valorU) {
        for (let contador = 2; contador >= 0; contador--) {
            valorC = prompt("Ingrese nuevamente su contraseña:");
            parseInt = (valorC);

            if (valorC == valorU) {
                alert("Puede seguir con el proceso.");
                console.log("Confirmacion = Si");
                break;
            }

            if (valorC != valorU) {
                if (contador > 0) {
                    alert(`Las contraseñas no son las mismas. Por favor vuelva a intentarlo. Intentos restantes ${contador}`);
                }
                else if (contador == 0) {
                    alert("Intentelo de nuevo en unos minutos.");
                    console.log("Confirmacion = NO");
                }
            }
        }
    }

    /* SE PIDE LOS DATOS DEL USUARIO */
    let nombreUsuario = prompt("Cual es su nombre completo?");
    let edadUsuario = prompt("Cual es su edad?");
    console.log(`Nombre completo y edad: ${nombreUsuario}, ${edadUsuario}`);

    /* SE PIDE LOS DATOS DEL AUTO DEL USUARIO*/
    let marcaUsuario = prompt("Escriba la marca: \nVolkswagen // Ford // Renault // Chevrolet // Peugeot // Fiat");
    const hayMarca = arrayDatos.some(Datos => Datos.marca === marcaUsuario); 
    const buscar = arrayDatos.find(Datos => Datos.marca === marcaUsuario);
    let anioUsuario = prompt("Ingrese año del auto:");
    console.log(`Marca:${marcaUsuario}. Año:${anioUsuario}.`);

    /* SE CALCULA LA TARIFA TOTAL CON LOS DATOS EDAD USUARIO Y AÑO DE VEHICULO*/
    let indice = arrayDatos.indexOf(buscar);
    const arrayDatosTarifas = arrayDatos.map((Datos) => {
        if (anioUsuario < 2008) {
            return {
                marca: Datos.marca,
                precio: (Datos.precio * 1.18),
                suma: (Datos.suma / 1.68)
            }
        } else if (anioUsuario > 2008 && anioUsuario < 2014) {
            return {
                marca: Datos.marca,
                precio: (Datos.precio * 1.23),
                suma: (Datos.suma / 1.45)
            }
        } else if (anioUsuario > 2014) {
            return {
                marca: Datos.marca,
                precio: (Datos.precio * 1.37),
                suma: (Datos.suma / 1.12)
            }
        }
        if (edadUsuario > 17 && edadUsuario < 24) {
            return {
                marca: Datos.marca,
                precio: (Datos.precio * 1.35),
                suma: Datos.suma
            }
        } else {
            return {
                marca: Datos.marca,
                precio: (Datos.precio * 1.22),
                suma: Datos.suma
            }
        }
    })
    console.log("Datos completos:");
    console.log(arrayDatosTarifas);

    /* SE BUSCA EL MODELO DEL USUARIO Y SE MUESTRA EL TOTAL DEL PRECIO */
    const buscar2 = arrayDatosTarifas.find(Datos => Datos.marca === marcaUsuario);
    console.log("Datos para el usuario:");
    console.log(buscar2)

    /* EN CASO DE CONFIRMAR EL SEGURO SE LE PIDE UNA CONTRASEÑA */
    let passwordUsuario = prompt("Ingrese una contraseña:");
    parseInt = (passwordUsuario);
    console.log(`Password: ${passwordUsuario}`);

    /* SE PIDE LA CONFIRMACION DE LA CONTRASEÑA */
    let passwordConfirmacion;
    confirmacion(passwordConfirmacion, passwordUsuario);
}