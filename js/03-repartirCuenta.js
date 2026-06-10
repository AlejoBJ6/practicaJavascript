//Un grupo de amigos va a cenar. El algoritmo debe pedir el costo total de la cena y la cantidad de personas. Luego, debe mostrar cuánto dinero debe pagar cada uno en partes iguales.

const costoTotal = parseFloat(prompt("Ingrese el costo total de la cena:"))
const cantidadPersona = parseFloat(prompt("Ingrese la cantidad de personas:"))
const costoPorPersona = costoTotal / cantidadPersona