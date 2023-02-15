{
    /* ARRAY DE LA BASE DE DATOS */
    class Lista{
        constructor(marca, precio){
            this.marca = marca;
            this.precio = precio;
        }
    }
    
    /* BASE DE DATOS DE MARCAS Y TARIFAS */
    const volkswagen = new Lista ("Volkswagen", 3100);
    const ford = new Lista ("Ford", 2840);
    const renault = new Lista ("Renault", 3220);
    const chevrolet = new Lista ("Chevrolet", 2750);
    const peugeot = new Lista ("Peugeot", 3845);
    const fiat = new Lista ("Fiat", 2530);

    const listaProductos = [volkswagen, ford, renault, chevrolet, peugeot, fiat];
    
    /* PROCESO PARA CONFIRMAR LAS CONTRASEÑAS */
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
    let anioUsuario = prompt("Ingrese año del auto:");
    console.log(`Marca:${marcaUsuario}. Año:${anioUsuario}.`);
    const buscar = listaProductos.find (Lista=> Lista.marca === marcaUsuario);
    console.log(buscar);

    /* SE CALCULA LA TARIFA TOTAL CON LOS DATOS */
    prompt(`El costo de seguro por su ${marcaUsuario} año ${anioUsuario} es de `)
    
    /* EN CASO DE CONFIRMAR EL SEGURO SE LE PIDE UNA CONTRASEÑA */        
/*     let passwordUsuario = prompt("Ingrese una contraseña:");
    parseInt = (passwordUsuario);
    console.log(`Password: ${passwordUsuario}`); */

    /* SE PIDE LA CONFIRMACION DE LA CONTRASEÑA */
/*     let passwordConfirmacion;
    confirmacion(passwordConfirmacion, passwordUsuario); */
}