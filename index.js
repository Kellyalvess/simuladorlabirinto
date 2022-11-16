const clc = require('cli-color');
const prompt = require('prompt-sync');
var clc = require("cli-color");

// replace e replaceall

// var text = 'ola galera';

// text = text.replace('a','@');
// text = text.replaceAll('l', 'C');

// console.log(text);

// var lista = [ '14', 20, true,'naju'];
// lista = lista.toString()
// lista = lista.replaceAll(',',' ')
// console.log(lista)

// ---------------------------------------------------------------------------------


// var texto = 'cadu,bibi,naju,kelly,sabrina,julia';

// texto = texto.split(';')
// console.log(texto[0]);
//////////////////////////////////////////////////////////////////////////////////////////

// console.log(clc.red("NAJU"))
// console.log(clc.bgYellow("NAJU LINDA"))
// console.log(clc.black.bgBlue("NAJU PERFEITA"))
// console.log(clc.italic("NAJU A MELHOR"))
// console.log(clc.red.bold("UNICA"))

var nomes = ['cadu', 'julia', 'kelly', 'sabrina', 'bibi', 'naju', 'renan', 'allan']

// nomes = nomes.toString()

// console.log(clc.white.bgGreen(nomes))

// for (i of nomes) {
//   if (i[0] == 'l' || i[0] == 'a') {
//   console.log(clc.bgBlue(i))
//   } else {
//     console.log(clc.bgRed(i))
//   }
// }

var labirinto = [
  [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
  [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
  [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
  [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]
// 22 nao posso andar
// 11 posso andar
// 33 posição atual
// 88 posição dos produtos
var clc = require("cli-color");

function colorir(text) {
  if (text == 22) {
    return clc.bgRed('   ');
  } else if (text == 11) {
    return clc.bgBlue('   ');
  } else if (text == 88) {
    return clc.bgYellow(' $ ');
  } else {
    return clc.bgGreen(' 🛒 ');
  }
}

function mostrarLabirinto() {
  console.clear()
  for (let linha of labirinto) {
    var linhaFormatada = [];
    for (let item of linha) {
      linhaFormatada.push(colorir(item));
    }
    console.log(linhaFormatada.toString().replaceAll(',', ''));
  }
}
mostrarLabirinto();

var x = 0;
var y = 5;

function desce() {
  if (labirinto[x + 1][y] !== 22) {
    labirinto[x][y] = 11;
    x = x + 1;
    labirinto[x][y] = 33;
    contador++;
  }
}

function sobe() {
  if (labirinto[x - 1][y] !== 22 && x - 1 > 0) {
    labirinto[x][y] = 11;
    x = x - 1;
    labirinto[x][y] = 33;
    contador++;
  }
}

function direita() {
  if (labirinto[x][y + 1] !== 22) {
    labirinto[x][y] = 11;
    y = y + 1;
    labirinto[x][y] = 33;
    contador++;
  }
}

function esquerda() {
  if (labirinto[x][y - 1] !== 22) {
    labirinto[x][y] = 11;
    y = y - 1;
    labirinto[x][y] = 33;
    contador++;
  }
}
var contador = 0;
while (true) {
  mostrarLabirinto();
  console.log('contador de passos: ', contador);
  var escolha = prompt('wasd');
  if (escolha == 'w') {
    sobe();
  } else if (escolha == 'a') {
    esquerda();
  } else if (escolha == 's') {
    desce();
  } else if (escolha == 'd') {
    direita();
  }
}
