
const fieldSize = 30;
const celldSize = 20;
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#e100de";


let field = new Array(fieldSize);
for(let i = 0; i < fieldSize; i++)
	field[i] = new Array(fieldSize);

let nextField = new Array(fieldSize);
for(let i = 0; i < fieldSize; i++)
	nextField[i] = new Array(fieldSize);



function neighborCount(r, c){//row column
	let count = -field[r][c];
	for(let i = -1; i <= 1; i++)
		for(let j = -1; j <= 1; j++)
			count += field[(r+i+fieldSize)%fieldSize][(c+j+fieldSize)%fieldSize];
	return count;
}

function nextGen(){
	for(let i = 0; i < fieldSize; i++)
		for(let j = 0; j < fieldSize; j++){
			nextField[i][j] = field[i][j];
			if ((field[i][j] === 0) && (neighborCount(i,j) === 3))
				{nextField[i][j] = 1;}
			else if ((field[i][j] === 1) &&
					((neighborCount(i,j) < 2) || (neighborCount(i,j) > 3)))
				{nextField[i][j] = 0;}
		}
}

function doStep(){
	nextGen();
	for(let i = 0; i < fieldSize; i++)
		for(let j = 0; j < fieldSize; j++)
			field[i][j] = nextField[i][j];
	for(let i = 0; i < fieldSize; i++)
		for(let j = 0; j < fieldSize; j++)
			if (field[i][j] === 1){
				ctx.fillStyle = "#ff00a4";
				ctx.fillRect(i * celldSize, j * celldSize, celldSize, celldSize);
			}
			else{
				ctx.fillStyle = "#FFF";
				ctx.fillRect(i * celldSize, j * celldSize, celldSize, celldSize);
			}
}

for(let i = 0; i < fieldSize; i++)
	for(let j = 0; j < fieldSize; j++)
		field[i][j] = (Math.random() > 0.9) * 1;


let timer;
function startInterval() {
    timer = setInterval(doStep, 250);
}

function stopInterval() {
    if (timer) {
        clearInterval(timer);}
}

