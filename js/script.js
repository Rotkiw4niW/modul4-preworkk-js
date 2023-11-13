function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function displayResult(p,c){
    if(p==c){
        printMessage("draw");
    }else if (p == "kamien" && c =="papier"){
        printMessage("you lose");
    }else if (p== "nożyce" && c == "kamien"){
        printMessage("you lose");
    }else if (p== "papier" && c == "nożyce"){
        printMessage("you lose");
    }
    else{
        printMessage("you win")
    };

}

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
    }

function playerMove(){
    var computerMoveNumber= Math.floor(Math.random()*3+1);
    var computer = getMove(computerMoveNumber);
    console.log(computerMoveNumber);
    clearMessages();
    var player = this.innerHTML;
    console.log(player);


    displayResult(player, computer);
    
}
// napisać wersję z addEventListener !!!
var buttons = document.querySelectorAll(".button");
console.log(buttons);
buttons.forEach(element => 
    element.addEventListener("click", playerMove) 
);








