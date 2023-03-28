var idade = 67
console.log(`Você tem ${idade}`)
if (idade < 16){
    console.log('Não Vota')
} else if (idade < 18 || idade > 65) {
       console.log('Voto opcional') 
} else {
    console.log('O voto é obrigatorio')
}

//estrutura aninhada 

//não dar erro na tela não significa que esta certo, 
//não tem erro sintatico
//logica errada:

/*
var idade = 16

if (idade < 18){
    console.log('Menor de idade')
} else {
   console.log('Maior de idade') 
}*/