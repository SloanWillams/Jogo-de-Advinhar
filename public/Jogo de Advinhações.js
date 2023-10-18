let NumeroSecreto = 0
let NumeroDeChances = 3
let contador = 1
let min = 1
let max = 5
let Situacao = ''

let inputNumero = document.querySelector('#inputNumero')
let btnChutar = document.querySelector('#btnChutar')
let aviso = document.querySelector('#aviso')
let musica = document.querySelector('musicaDefundo')

function OrdenarNumeroSecreto() {
  NumeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min
  console.log(NumeroSecreto)
}
function bloquearBtnChutar() {
  btnChutar.setAttribute('disabled', 'disabled')
  btnChutar.Style.background = '#ccc'
  btnChutar.Style.cursor = 'not-allowed'
}
function ativarBtnChutar() {
  btnChutar.removeAttribute('disabled')
  btnChutar.Style.background = '#222'
  btnChutar.Style.cursor = 'pointer'
}
function validarNumeroDigitado(numero) {
  if (numero <= 0 || numero > 10) {
    console.log('Tentativa invalida!')
    aviso.classList.add('errou')
    mensagemRapida('Agora digite um numero de 1 a 10.')
    bloquearBtnChutar()
    inputNumero.value = ''
  } else {
    console.log('numero valido')
  }
}

function tocarMusicaDefundo() {
  musica.play()
}

function AtivarDesativarMusica() {
  if (musica.muted) {
    musica.muted = false;
  } else {
    musica.muted = true;
  }
}

function pausarMusicaDeFundo() {
  musica.pause()
  musica.currentTime = 0;
}

function jogar() {
  console.log("jogando")
  verificarSeAcertou()
}

function mensagemRapida(mensagem) {
  aviso.textContent = mensagem
  setTimeout(function () {
    aviso.textContent = ""
    aviso.classList.remove('Parabéns! Você acertou, Maravilha!')
    aviso.classList.remove('Opa!!! Infelizmente você errou, mas não desista, tente outra vez!!!')
    inputNumero.value = ""
  }, 3000)
}

function gameOver(Situacao) {
  switch (Situacao) {

    case 'Acertou':
      aviso.classList.add('Acertou')
      mensagemRapida('Parabéns!!! Voce acertou e o numero era' + NumeroSecreto)

      break

    case 'Chute maior':
      mensagemRapida('chute maior que o numero secreto')
      aviso.classList.add('errou')

      break

    case 'Chute menor':
      aviso.classList.add('errou')
      mensagemRapida('chute menor que o secreto')

      break

    default:
      console.log('Informe a situacao do Jogo')
  }
}

function verificarSeAcertou() {

  chute = parseInt(document.querySelector('#inputNumero').value)

  console.log('Nº do chute' + contador)
  console.log('chute' + chute)

  if (NumeroSecreto === chute) {
    console.log('Acertou')
    Situacao = 'Acertou'
    gameOver(Situacao)
    gerarNumeroSecreto()

  } else if (chute > NumeroSecreto) {
    console.log('chute maior')
    Situacao = 'chute maior'
    gameOver(Situacao)
  } else if (chute < NumeroSecreto) {
    console.log('chute menor')
    Situacao = 'chute menor'
    gameOver(Situacao)
  } else {
    console.log('Impossibilitado de verificar se acertou!!!')
  }
}