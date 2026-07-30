//Heloisa

let pares = [];
 
console.log("Numeros pares de 1 a 100");
for(i = 1; i <= 100; i++ ){
    if(i % 2 === 0){
        console.log(i);
        pares.push(i);
    }
}
console.log("Quantidade de numeros pares de 1 a 100 é:" + pares.length);