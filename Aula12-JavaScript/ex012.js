
var agora = new Date() // pega hora atual 
var hora = agora.getHours // pra pegar a hora atual
console.log(`Agora são Exatamente ${hora} horas`)

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}

// condição multipla = switch (expressão) {
//    case valor 1
//break
//    case valor 2
//break
// default
//break
//}