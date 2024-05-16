const alumnos =
    [
        { "nombre": "Zoe", "apellido": "Ramirez", "ciudad": "Barcelona", "fecha_nacimiento": "2008-05-11", "sexo": "M" },
        { "nombre": "David", "apellido": "Schmidt", "ciudad": "Barcelona", "fecha_nacimiento": "2007-12-25", "sexo": "H" },
        { "nombre": "Cristina", "apellido": "Lemke", "ciudad": "Barcelona", "fecha_nacimiento": "2005-01-06", "sexo": "M" },
        { "nombre": "Esther", "apellido": "Spencer", "ciudad": "Barcelona", "fecha_nacimiento": "1956-12-19", "sexo": "M" },
        { "nombre": "Carmen", "apellido": "Streich", "ciudad": "Hospitalet", "fecha_nacimiento": "1958-10-15", "sexo": "M" },
        { "nombre": "Alfredo", "apellido": "Stiedemann", "ciudad": "Barcelona", "fecha_nacimiento": "1957-01-01", "sexo": "H" },
        { "nombre": "Manolo", "apellido": "Hamill", "ciudad": "Barcelona", "fecha_nacimiento": "2006-04-23", "sexo": "H" },
        { "nombre": "Alejandro", "apellido": "Kohler", "ciudad": "Barcelona", "fecha_nacimiento": "1980-03-14", "sexo": "H" },
        { "nombre": "Antonio", "apellido": "Fahey", "ciudad": "Hospitalet", "fecha_nacimiento": "1982-03-18", "sexo": "H" },
        { "nombre": "Guillermo", "apellido": "Ruecker", "ciudad": "Barcelona", "fecha_nacimiento": "1973-05-05", "sexo": "H" },
        { "nombre": "Micaela", "apellido": "Monahan", "ciudad": "Barcelona", "fecha_nacimiento": "1976-02-25", "sexo": "H" },
        { "nombre": "Francesca", "apellido": "Schowalter", "ciudad": "Barcelona", "fecha_nacimiento": "1980-10-31", "sexo": "H" }
    ]

const precioBaseMatricula = 250;

module.exports = {
    alumnos,
    matricula: precioBaseMatricula
}