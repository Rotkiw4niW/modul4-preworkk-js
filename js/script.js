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

console.log("player :"+player);
console.log("computer :" + computer);
function displayResult(p,c){
    if(p==c){
        printMessage("draw");
    }else if (p == 1 && c ==2){
        printMessage("you lose");
    }else if (p== 3 && c == 1){
        printMessage("you lose");
    }else if (p== 2 && c == 3){
        printMessage("you lose");
    }
    else{
        printMessage("you win")
    };

};
displayResult(playerMoveNumber, computerMoveNumber);