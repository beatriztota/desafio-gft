function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    return `O Herói tem saldo ${saldoVitorias} e está no nível ${nivel}`;
}


document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const vitorias = parseInt(document.getElementById('vitorias').value);
    const derrotas = parseInt(document.getElementById('derrotas').value);
    
    const resultado = calcularNivel(vitorias, derrotas);
    document.getElementById('resultado').innerText = resultado;
});
