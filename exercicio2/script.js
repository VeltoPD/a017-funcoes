
function soma() {
    let v1 = +prompt("valor 1")
    let v2 = +prompt("valor 2")
    let sum = (v1 + v2)
    console.log(sum)
}
soma()

function bool() {
    let v1 = +prompt("valor 1")
    let v2 = +prompt("valor 2")
    if (v1 >= v2) {
        console.log(true)
    } else {
        console.log(false)
    }
}
bool()

function parOuImpar() {
    let value = +prompt("número")
    if (value % 2 == 0) {
        console.log("Par")
    } else {
        console.log("Ímpar")
    }
}
parOuImpar()


function valorString() {
    let message = prompt("Digite uma mensagem")
    console.log("número de caracteres: ", message.length)
    console.log(message.toUpperCase())
}
valorString()
