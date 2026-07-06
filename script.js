alert('bem vindo ao jogo do numero secreto');

let numerosecreto = 5;
let chute = prompt('digite um numero de 1 a 10');

while (chute != 5){
    if (chute < numerosecreto){
        alert(`o numero secreto eh maior que ${chute}`);
        }
    if (chute > numerosecreto){
      alert(`o numero secreto eh menor que ${chute}`);
    }
chute = prompt('tente novamente');
    }
          alert('voce acertou');
        }
