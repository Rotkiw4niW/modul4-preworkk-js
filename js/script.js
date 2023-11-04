function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMoveNumber= Math.floor(Math.random()*3+1);

console.log(computerMoveNumber);
var playerMoveNumber = prompt("wybierz ruch: 1-k 2-p 3-n");



function getMove(a){
if(a==1){
var move = "kamien" 
return move
}else if(a==2){
    var move = "papier"
    return move
}else{
    var move = "nożyce"
    return move
};
};

var player = getMove(playerMoveNumber);
var computer = getMove(computerMoveNumber);

console.log(player);
console.log(computer);