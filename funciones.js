// En este fichero creo todas las funciones que me ayudaran a resolver los ejercicios

function esMenor(nacimiento) {

    // Primero obtener la fecha actual
    let date = new Date()
    // A la variable date la convierto en un string y luego en un array
    let arrayDate = date.toLocaleString().split(", ")
    // La primera posicion del array me da la fecha actual como string y lo separo en otro array
    let hoy = arrayDate[0].split("/")
    // Cada elemento del array me da año, mes, dia y lo convierto en numero entero
    const añoHoy = parseInt(hoy[2])
    const mesHoy = parseInt(hoy[1])
    const diaHoy = parseInt(hoy[0])

    // El argumento de la fecha de nacimiento llega como un string, lo convierto en un array
    nacimiento = nacimiento.split("-")
    const añoNac = parseInt(nacimiento[0])
    const mesNac = parseInt(nacimiento[1])
    const diaNac = parseInt(nacimiento[2])

    // Condicional que comparara las fechas y devuelve true si el alumno es menor, o false en caso contrario
    if (añoHoy - añoNac > 18 ||
        (añoHoy - añoNac == 18 && mesHoy > mesNac) ||
        (añoHoy - añoNac == 18 && mesHoy == mesNac && diaHoy >= diaNac)
    ) {
        return false;
    } else {
        return true;
    }
}

function esMayor65(nacimiento) {

    // La lógica de obtencion de fechas es la misma de la funcion anterior
    let date = new Date()
    let arrayDate = date.toLocaleString().split(", ")
    let hoy = arrayDate[0].split("/")
    const añoHoy = parseInt(hoy[2])
    const mesHoy = parseInt(hoy[1])
    const diaHoy = parseInt(hoy[0])

    nacimiento = nacimiento.split("-")
    const añoNac = parseInt(nacimiento[0])
    const mesNac = parseInt(nacimiento[1])
    const diaNac = parseInt(nacimiento[2])

    // Ccondicional que comparara las fechas y devuelve true si el alumno es mayor de 65, o false en caso contrario
    if (añoHoy - añoNac > 65 ||
        (añoHoy - añoNac == 65 && mesHoy > mesNac) ||
        (añoHoy - añoNac == 65 && mesHoy == mesNac && diaHoy >= diaNac)
    ) {
        return true;
    } else {
        return false;
    }
}

function diasParaSerMayor(nacimiento) {

    if (esMenor(nacimiento)) {

        // La lógica de obtencion de fechas es la misma de la funcion anterior
        let date = new Date()
        let arrayDate = date.toLocaleString().split(", ")
        let hoy = arrayDate[0].split("/")
        const añoHoy = parseInt(hoy[2])
        const mesHoy = parseInt(hoy[1])
        const diaHoy = parseInt(hoy[0])

        nacimiento = nacimiento.split("-")
        const añoNac = parseInt(nacimiento[0])
        const mesNac = parseInt(nacimiento[1])
        const diaNac = parseInt(nacimiento[2])

        let años = 18 - (añoHoy - añoNac)
        let meses = mesNac - mesHoy
        let dias = diaNac - diaHoy

        return dias + meses * 30 + años * 365
    }
}

function calcularEdad(nacimiento) {

    // Lógica para obtener los datos de año, mes y dia que vimos en clase
    const fecha = new Date();
    const añoHoy = fecha.getFullYear()
    const mesHoy = fecha.getMonth() + 1
    const diaHoy = fecha.getDate()

    nacimiento = nacimiento.split("-")
    const añoNac = parseInt(nacimiento[0])
    const mesNac = parseInt(nacimiento[1])
    const diaNac = parseInt(nacimiento[2])

    let edad = añoHoy - añoNac;

    if ((mesHoy < mesNac) || ((mesHoy == mesNac) && (diaHoy < diaNac))) {
        edad = edad - 1;
    }

    return edad
}

module.exports = {
    esMenor,
    esMayor65,
    diasParaSerMayor,
    calcularEdad
}