function dividir(numero1, numero2) {
    if (numero2 == 0) {
        return "No se puede realizar la operacion"
    }
    return numero1 / numero2
}
module.exports = { dividir }