let movenumber = 0;
let player1Move = [];
let player2Move = [];

const move = (id) => {
    movenumber++;
    const item = document.getElementById(id);
    let coordVal = document.createElement("span");
    coordVal.innerHTML = item.dataset.coord + "  ----- ";


    let placeholderValue = 'X';
    if(movenumber%2){
        placeholderValue = 'O'
        document.getElementById("panel").appendChild(coordVal); 
        player1Move.push(item.dataset.coord.split(",")) 

    }
    else {
        document.getElementById("panel2").appendChild(coordVal);  
        player2Move.push(item.dataset.coord.split(",")) 

    }

    console.log("Player 1", player1Move);
    console.log("Player 2", player2Move);
    
    item.innerText = placeholderValue;
}
