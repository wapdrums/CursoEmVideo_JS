var agora = new Date()
var diaSem = agora.getDay()


/*
0 = Domingo
1 = Segunda 
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado 
*/

//console.log(diaSem)

switch (diaSem) {
    case 0:
        console.log('domingo')
        break
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('Sabado')
        break //todos os break são obrigatorios no switch
        default:
            console.log('[ERROR] data invalida')
            break
}


//switch é limitado mas é util

/*

O que aprendemos até agora? 

A - Conhecendo javascript
B - Comandos basicos
C - Conhecendo o DOM
D - Condições em js 

*/