function modulo(dividendo, divisor) {
    if (divisor == 0) {
        return "no se puede realizar la operacion"
    } else {
        return (dividendo % divisor)
    }
}
module.exports = { modulo }