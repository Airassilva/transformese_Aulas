let quantidadeNumerosPossiveis = 7;
const NOME_EVENTO = "Bingo da comunidade!!!!!!!";
let totalSorteados = 3;
let terminou = true;

console.log(quantidadeNumerosPossiveis);
console.log("Terminou? " + terminou);
console.log(NOME_EVENTO, totalSorteados);

console.log("Soma:", quantidadeNumerosPossiveis + totalSorteados);
console.log("Subtração:", quantidadeNumerosPossiveis - totalSorteados);
console.log("Multiplicação:", quantidadeNumerosPossiveis * totalSorteados);
console.log("Divisão:", quantidadeNumerosPossiveis / totalSorteados);
console.log("Resto da divisão:", quantidadeNumerosPossiveis % totalSorteados);

totalSorteados += 2; 
console.log("Após += 2:", totalSorteados);

totalSorteados *= 2; 
console.log("Após *= 2:", totalSorteados);

console.log("Quantidade > Sorteados?", quantidadeNumerosPossiveis > totalSorteados);
console.log("Quantidade < Sorteados?", quantidadeNumerosPossiveis < totalSorteados);
console.log("Quantidade == Sorteados?", quantidadeNumerosPossiveis == totalSorteados);
console.log("Terminou é verdadeiro?", terminou === true);