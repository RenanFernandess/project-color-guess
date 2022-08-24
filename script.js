const boxBall = document.querySelector('#boxBall');
const balls = document.getElementsByClassName('ball');
const rgbColor = document.getElementById('rgb-color');
const answer = document.getElementById('answer');
const play = document.getElementById('reset-game');
const score = document.getElementById('score');

// 1 - cria as divs circulos
function createDivClass(number, local, clas) {
  for (let index = 0; index < number; index += 1) {
    const element = document.createElement('div');
    element.className = clas;
    local.appendChild(element);
  }
}

// 2 - adiciona o backgroundColor
function createRgbColor() {
  const r = parseInt((Math.random() * 250), 10);
  const g = parseInt((Math.random() * 250), 10);
  const b = parseInt((Math.random() * 250), 10);
  return `(${r}, ${g}, ${b})`;
}

function backgroundColorAdd() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].style.backgroundColor = `rgb${createRgbColor()}`;
  }
}

// 3 - adiciona o codico da cor rgb
function rgbCode() {
  const ball = document.querySelectorAll('.ball');
  const index = parseInt((Math.random() * 6), 10);
  const background = ball[index].style.backgroundColor.split('rgb');
  console.log(background[1]);
  return background[1];
}

function rgbCodeAdd() {
  rgbColor.innerText = rgbCode();
}

// score
function scoreValue(nun) {
  const number = parseInt(score.innerText);
  const points = number + nun;
  score.innerText = points;
}

// 4 - checa o resultado
function checkResult() {
  const selected = document.querySelector('.selected').style.backgroundColor.split('rgb');
  const comper = rgbColor.innerText;
  if (selected[1] === comper) {
    answer.innerText = 'Acertou!';
    scoreValue(3);
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

// 5 - adiciona o seletor de cores
function removeClass() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].removeAttribute(balls[index].className = 'ball');
  }
}

function selectColor() {
  for (let index = 0; index < balls.length; index += 1) {
    balls[index].addEventListener('click', () => {
      removeClass();
      balls[index].className += ' selected';
      checkResult();
    });
  }
}

// 6 - adiciona a função que reseta a h3 com id answer
function startAnswer() {
  answer.innerText = '"Escolha uma cor"';
}

// adiciona o botão
function playReset() {
  play.addEventListener('click', () => {
    play.innerText = 'next';
    backgroundColorAdd();
    rgbCodeAdd();
    removeClass();
    startAnswer();
  });
}

// chama functions
createDivClass(6, boxBall, 'ball');
backgroundColorAdd();
rgbCodeAdd();
selectColor();
playReset();
