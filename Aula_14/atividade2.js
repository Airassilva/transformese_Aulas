let ApresentacaoMusical = {
    nomeArtistas: ["Artista 1", "Artista 2", "Artista 3", "Artista 4", "Artista 5"],
    ritmoMusical: ["Pop", "Rock", "MPB", "Samba", "Eletrônica"],
    horarioApresentacao: ["18:00", "21:00", "22:00", "23:00", "00:00"]
};

for (let chave in ApresentacaoMusical.horarioApresentacao) {
    if (ApresentacaoMusical.horarioApresentacao[chave] >= "20:00") {
        console.log(ApresentacaoMusical.nomeArtistas[chave]);
    }
}