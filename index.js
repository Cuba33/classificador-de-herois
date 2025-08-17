// Arrays para armazenar nomes, tipos e níveis dos personagens
let nomesHerois = [];
let niveisHerois = [];
let nomesViloes = [];
let niveisViloes = [];

function valorNivel(nivel) {
    switch(nivel) {
        case "Ferro": return 1;
        case "Bronze": return 2;
        case "Prata": return 3;
        case "Ouro": return 4;
        case "Platina": return 5;
        case "Ascendente": return 6;
        case "Imortal": return 7;
        case "Radiante": return 8;
        default: return 0;
    }
}

while (true) {
    let nome = gets();
    if (nome === "FIM") break;

    let tipo = gets();
    let xp = parseInt(gets());

    if (tipo !== "Heroi" && tipo !== "Vilao") {
        print("Tipo invalido");
        continue;
    }

    let nivel = "";
    if (xp < 1000) nivel = "Ferro";
    else if (xp >= 1001 && xp <= 2000) nivel = "Bronze";
    else if (xp >= 2001 && xp <= 5000) nivel = "Prata";
    else if (xp >= 5001 && xp <= 7000) nivel = "Ouro";
    else if (xp >= 7001 && xp <= 8000) nivel = "Platina";
    else if (xp >= 8001 && xp <= 9000) nivel = "Ascendente";
    else if (xp >= 9001 && xp <= 10000) nivel = "Imortal";
    else if (xp >= 10001) nivel = "Radiante";

    if (tipo === "Heroi") {
        nomesHerois.push(nome);
        niveisHerois.push(nivel);
    } else {
        nomesViloes.push(nome);
        niveisViloes.push(nivel);
    }
}

function ordenarPorNivel(nomes, niveis) {
    let combinados = nomes.map((nome, i) => ({nome, nivel: niveis[i]}));
    combinados.sort((a, b) => valorNivel(b.nivel) - valorNivel(a.nivel));
    return combinados;
}

if (nomesHerois.length === 0 && nomesViloes.length === 0) {
    print("Nenhum personagem registrado");
} else {
    let heroisOrdenados = ordenarPorNivel(nomesHerois, niveisHerois);
    let viloesOrdenados = ordenarPorNivel(nomesViloes, niveisViloes);

    print(`Herois: ${heroisOrdenados.length}`);
    for (let h of heroisOrdenados) {
        print(`- ${h.nome} (${h.nivel})`);
    }

    print(`Viloes: ${viloesOrdenados.length}`);
    for (let v of viloesOrdenados) {
        print(`- ${v.nome} (${v.nivel})`);
    }
}
