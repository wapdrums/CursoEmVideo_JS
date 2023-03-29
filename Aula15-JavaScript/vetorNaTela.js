let valores = [8, 9, 7, 5, 6 , 4, 1]

console.log(valores)

/*
for ( let pos = 0 ; pos<valores.length ; pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} */


for ( let pos  in  valores ) { // in = dentro
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

