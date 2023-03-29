let num = [5, 8, 2, 9, 3]
//num.sort()
//num.push(4)
console.log(num)


//num[3] = 6 // adiciona item no indice 3
//num.push(7) // adiciona 1 item no proximo indice

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor da posição é ${num[0]}`)




//num.length // quantos elementos tem no vetor (inclui o 0)
//num.sort() // coloca o elemento em ordem crescente
// [0] = posição de cada vetor

// estrutura de repetição 12 13 e 14 (caso sinta dificuldade)


for ( let pos = 0 ; pos<num.length ; pos++ ){
    console.log(num[pos])
}

let pos = num.indexOf(8)
console.log(`O valor esta na posição ${pos}`)