const numerosSorteados = [];

for (let i = 0; i < 15; i++) {
    numerosSorteados.push(Math.floor(Math.random() * 75) + 1);
}

numerosSorteados.sort(function (a, b) {
    return b - a;
});

console.log(numerosSorteados);