let tray = {
  a1: '', a2: '', a3: '',
  b1: '', b2: '', b3: '',
  c1: '', c2: '', c3: ''
};

let player = '';
let warning = '';
let playing = false;
reset();

document.querySelector('.panel').addEventListener('click', reset);
document.querySelectorAll('.line').forEach(item => {item.addEventListener('click', click);});

function click(event) {
  let item = event.target.getAttribute('data-item');
  if (playing && tray[item] === '') {
    tray[item] = player;
    renderTray();  
    togglePlayer(); 
  } 
}

function reset() {
  warning = '';
  player = Math.floor(Math.random() * 2) === 0 ? 'X' : 'O';

  for(let i in tray) {tray[i] = '';}
  playing = true;

  renderTray();
  renderInfo();
}

function renderTray() {
  for (let i in tray) {
    let item = document.querySelector(`div[data-item=${i}]`);
    item.innerHTML = tray[i];
  }

  checkGame();
}

function renderInfo() {
  document.querySelector('.time').innerHTML = player;
}

function togglePlayer() {
  player = ( player === 'X') ?'O' : 'X';
  renderInfo();
}

function checkGame() {
  if (checkWinnerFor('X')) {
    warning = 'X VENCEU';
    playing = false;
    endGame();
  }
  
  else if (checkWinnerFor('O')) {
    warning = 'O VENCEU';
    playing = false;
    endGame();
  }

  else if (isFull()) {
    warning = 'EMPATE';
    playing = false;
    endGame();
  }
}

function checkWinnerFor(player) {
  let pos = [
    'a1,a2,a3',
    'b1,b2,b3',
    'c1,c2,c3',

    'a1,b1,c1',
    'a2,b2,c2',
    'a3,b3,c3',

    'a1,b2,c3',
    'a3,b2,c1'
  ];

  for (let w in pos) {
    let pArray = pos[w].split(',');
    let hasWon = pArray.every(option => tray[option] === player);
    if(hasWon) return true;
  }

  return false;
}

function isFull() {
  for(let i in tray) {
    if(tray[i] === '') {return false;}
  }
  
  return true;
}

function endGame() {
  renderInfo();

  const overlay = document.querySelector('.endgame');
  const text = document.querySelector('.endgame-text');

  text.innerHTML = warning;
  overlay.classList.remove('hidden');

  setTimeout(() => {
    overlay.classList.add('hidden');
    reset();
  }, 2500);
}
