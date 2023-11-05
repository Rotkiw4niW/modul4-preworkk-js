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

};

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

function playerMove(button){
    var computerMoveNumber= Math.floor(Math.random()*3+1);
    var computer = getMove(computerMoveNumber);
    console.log(computerMoveNumber);
    clearMessages();
    var player = button.innerHTML;
    console.log(player);


    displayResult(player, computer);
    
}









