let movenumber = 0;
let player1Move = [];
let player2Move = [];

const cellid = new Set();
const move = (id) => {

    if (cellid.has(id)) {
        return
    }
    else {
        cellid.add(id)
    }
    movenumber++;
    const item = document.getElementById(id);
    let coordVal = document.createElement("span");
    coordVal.innerHTML = item.dataset.coord + "  ----- ";


    let placeholderValue = 'X';
    if (movenumber % 2) {
        placeholderValue = 'O'
        document.getElementById("panel").appendChild(coordVal);
        player1Move.push(item.dataset.coord.split(","))

    }
    else {
        document.getElementById("panel2").appendChild(coordVal);
        player2Move.push(item.dataset.coord.split(","))

    }

    //console.log("Player 1", player1Move);
    //console.log("Player 2", player2Move);

    item.innerText = placeholderValue;
}

const winner = (a,player) => {
    
    let x = []
let y = []
let diag1Count = 0;
let diag2Count = 0;
  a.forEach(item => {
      if(item[0]==item[1])
      {
        diag1Count++;
        if(diag1Count==3) { console.log("Winner!"); return}
      }
        if(parseInt(item[0])+parseInt(item[1]) === 2){
            console.log("Came in")
            diag2Count++;
            if(diag2Count == 3) { console.log("Winner!"); return}

        }
    x.push(parseInt(item[0]))
    y.push(parseInt(item[1]))

    }
    )
   
    console.log("x",player,x)
    console.log("y",player,y)
    let x0 = countOccurrences(x,0)

    let x1 = countOccurrences(x,1)      

    let x2 = countOccurrences(x,2)

    let y0 = countOccurrences(y,0)

    let y1 = countOccurrences(y,1)

    let y2 = countOccurrences(y,2)

    let final = [x0, x1, x2, y0, y1, y2]
    if(countOccurrences(final,3))
    {
        console.log("Winner")
    }

}



const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);