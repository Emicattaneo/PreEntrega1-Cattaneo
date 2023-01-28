{
    function calcularEdad(valorA) {
        return 2023 - valorA;
    }

    function mayorEdad(valorE) {
        if (valorE <= 17) {
            alert(`Hola ${nombreUsuario} ${apellidoUsuario} supongo que tenes ${valorE} años. Eres menor de edad`);
        }
        else
            alert(`Hola ${nombreUsuario} ${apellidoUsuario} supongo que tenes ${valorE} años. Eres mayor de edad`);
    }

    function confirmacion(valorC, valorU) {
        for (let contador = 2; contador >= 0; contador--) {
            valorC = prompt("Ingrese nuevamente su contraseña:");
            parseInt = (valorC);

            if (valorC == valorU) {
                alert("Bienvendio");
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

    let nombreUsuario = prompt("Cual es tu nombre? (sin apellido)");
    let apellidoUsuario = prompt("Cual es tu apellido?");
    console.log(`Nombre y Apellido: ${nombreUsuario} ${apellidoUsuario}`);

    let anioNacimiento = prompt("En que año naciste?");
    parseInt(anioNacimiento);
    console.log(`Nacimiento: ${anioNacimiento}`);

    let edad = calcularEdad(anioNacimiento)
    console.log(`Edad aproximada: ${edad}`);

    mayorEdad(edad);

    let passwordUsuario = prompt("Ingrese su contraseña:");
    parseInt = (passwordUsuario);
    console.log(`Password: ${passwordUsuario}`);

    let passwordConfirmacion;
    confirmacion(passwordConfirmacion, passwordUsuario);
}