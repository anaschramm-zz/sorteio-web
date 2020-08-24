let participantes= []

function addParticipante() {
    const nomeParticipantes = document.getElementById("nomeparticipante").value;

    participantes.push(nomeParticipantes);

    console.log(participantes.length);

    document.getElementById("nome_participantes").innerHTML=participantes;
}