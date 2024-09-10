alert('Sejam bem-vindos ao jogo do número secreto!');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let numeroDeTentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}.`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
    }
    numeroDeTentativas++;
}

let palavraTentativa = numeroDeTentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você acertou o número secreto ${numeroSecreto} com ${numeroDeTentativas} ${palavraTentativa}.`);