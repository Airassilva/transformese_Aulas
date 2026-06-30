let soma = 0;

for (let i = 1; i <= 75; i++) {
    if (i % 3 === 0) {
        continue;
    }
    soma = soma + i;
}

console.log("Soma total:", soma);