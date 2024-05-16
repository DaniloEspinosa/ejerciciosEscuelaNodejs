// Exportando lo que necesito de los modulos
const { alumnos, matricula } = require("./alumnos.js")
const { esMenor, esMayor65, diasParaSerMayor, calcularEdad } = require("./funciones.js")

// Para una escuela de idiomas, hace falta saber:
// 1) que alumnos son menores de edad, ya que se pasa la información de su asistencia a los padres
// 2) que alumnos son mayores de 65, ya que disponen de un descuento en la matrícula, a razón de
// un 5% por cada año que pasen de 64.

// Función que indique para los alumnos menores de edad
// su nombre, cuantos años tienen y cuantos días les faltan para cumplir 18
// De este modo:
// Pepa Pi tienes 17 años y te faltan 32 días para cumplir 18 años.

function alumnosMenores(array) {
    let mensaje = "\nLos alumnos menores son:"
    // Con un foreach recorro el array (en este caso de alumnos)
    array.forEach(item => {
        // Utilizando la funcion creada en el otro fichero verificamos si el usuario es menor
        if (esMenor(item.fecha_nacimiento)) {
            // Creo las variables y les asigno los valores recuperados de cada elemento del array
            let nombre = item.nombre
            let apellido = item.apellido
            // Funcion creada en el otro fichero
            let edad = calcularEdad(item.fecha_nacimiento)
            // Funcion creada en el otro fichero
            let dias = diasParaSerMayor(item.fecha_nacimiento)
            // Al final por cada alumno que se verifica la condicion devuelvo el mensaje formateado
            mensaje += `\n${nombre} ${apellido} tienes ${edad} años y te faltan ${dias} días para cumplir 18 años.`
        }
    })
    return mensaje + "\n"
}
// Utilizacion de la funcion creada
console.log(alumnosMenores(alumnos))

// Función que indique que alumnos pasan de 65 años, a qué descuento tienen derecho y
// cuanto costaría su matrícula. Por ejemplo:
// Pau Guerra tienes 66 años, tu descuento es del 10% y el importe de tu matrícula es de 225 € 

function alumnosMayores65(array) {
    let mensaje = "\nAlumnos mayores de 65:"
    // Utilizando la funcion creada en el otro fichero verificamos si el usuario es menor
    array.forEach(item => {
        if (esMayor65(item.fecha_nacimiento)) {
            // Creo las variables y les asigno los valores recuperados de cada elemento del array
            let nombre = item.nombre
            let apellido = item.apellido
            // Funcion creada en el otro fichero
            let edad = calcularEdad(item.fecha_nacimiento)
            let descuento = (edad - 64) * 5
            let pagar = matricula - (matricula * descuento / 100)
            // Al final por cada alumno que se verifica la condicion devuelvo el mensaje formateado
            mensaje += `\n${nombre} ${apellido} tienes ${edad} años, tu descuento es del ${descuento}% y el importe de tu matrícula es de ${pagar}€.`
            // console.log( mensaje )
        }
    })
    return mensaje + "\n"
}
// Utilizacion de la funcion creada
console.log(alumnosMayores65(alumnos))
