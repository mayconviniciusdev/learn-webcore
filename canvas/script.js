let currentColor = 'black';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let history = [];

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

document.querySelectorAll('.color-picker').forEach( item => {item.addEventListener('click', handleColorSelect);});
canvas.addEventListener('pointerdown', handlePointerDown);
canvas.addEventListener('pointermove', handlePointerMove);
canvas.addEventListener('pointerup', handlePointerUp);
document.querySelector('.btn-clear').addEventListener('click', clearCanvas);
document.querySelector('.btn-undo').addEventListener('click', undoLastAction);
document.querySelector('.btn-download').addEventListener('click', downloadImage);

function handleColorSelect(e) {
	let color = e.currentTarget.getAttribute('data-color');
	currentColor = color;
	
	document.querySelector('.color-picker.is-active').classList.remove('is-active');
	e.currentTarget.classList.add('is-active');
}

function handlePointerDown(e) {
	saveCanvasState();
	isDrawing = true;
	
	lastX = e.offsetX;
	lastY = e.offsetY;
}

function handlePointerMove(e) {
	if (!isDrawing) return;
	drawStroke(e.offsetX, e.offsetY);
}

function handlePointerUp() {isDrawing = false;}

function drawStroke(x, y) {
	ctx.beginPath();
	ctx.lineWidth = 5;
	ctx.lineJoin = 'round';
	ctx.lineCap = 'round';
	ctx.strokeStyle = currentColor;

	ctx.moveTo(lastX, lastY);
	ctx.lineTo(x, y);
	ctx.stroke();

	lastX = x;
	lastY = y;
}

function clearCanvas() {
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function saveCanvasState() {
	if (history.length > 10) {history.shift();}

	const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
	history.push(snapshot);
}

function undoLastAction() {
	if (history.length === 0) return;

	const previousState = history.pop();
	ctx.putImageData(previousState, 0, 0);
}

function downloadImage() {
	const image = canvas.toDataURL('image/png');
	const link = document.createElement('a');
	
	link.href = image;
	link.download = 'meu-desenho.png';

	link.click();
}