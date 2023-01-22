

let nombre = "Erika May";
let profesion = "artista plástica";
let pais = "Argentina";

function mostrarTexto() {
    let concatenacion = "Yo me llamo " + nombre + " y soy " + profesion + " nacida en " + pais + " y estaré encantada de saludarte directamente y cotizar cualquier obra que te interese adquirir";
    let texto = document.getElementById("concatenacion");
    texto.innerHTML = concatenacion;
}
