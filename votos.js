let votos=[]

function votar(candidato){
    votos.push(candidato)
}

function contarVotos() {
    let conteo = {};
    for(let i=0; i< votos.lenght; i++) {
     let voto= votos[i];
     if(conteo[voto]===undefined) {
        conteo[voto]=i;
     } else {
        conteo[voto]++;
     }

    }
    return conteo;
}

votar('candidato1');
votar('candidato1');
votar('candidato1');
votar('candidato1');
votar('candidato3');
votar('candidato2');
