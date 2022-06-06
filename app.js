let movenumber = 0;
let player1move = [];
let player2move = [];
const cellid = new Set();

// please comment the code before you realse. 
//Function Start move - this gets triggered when a player presses a cell.

const move = (id) => {
  if(cellid.has(id)){
    return
  }
  else{
    cellid.add(id);
  }
  movenumber++;
  if(movenumber>9){
    document.getElementById("winner").innerHTML = "Game is already Over, start again"

    return
  }
  const item = document.getElementById(id);
  let coordVal = document.createElement("span");
  coordVal.innerHTML = document.getElementById(id).dataset.coord + "  ----- ";
  console.log(document.getElementById(id).dataset.coord);

  let placeholderValue = "X";
  if(movenumber%2){
    placeholderValue = "O";
    player1move.push(document.getElementById(id).dataset.coord.split(","))
  }
  else{
    player2move.push(document.getElementById(id).dataset.coord.split(","))
  }
  if(movenumber > 4) { movenumber % 2 ? winner(player1move,"player1"): winner(player2move,"player2")}
  document.getElementById(id).innerText = placeholderValue;
}

//Function Winner - Decide if the move is a winning or not
const winner = (a,player) => {
let x = []
let y = []
let diag1count = 0;
let diag2count = 0;
a.forEach(item => {
  console.log(item)
  if(item[0]==item[1])
  {
    diag1count++;
    if(diag1count==3){document.getElementById("winner").innerHTML="WINNER IS:"+player;
    movenumber=10;
    styleDiag1()
    return}
  }
  if(parseInt(item[0])+parseInt(item[1])===2)
  {
    diag2count++;

    if(diag2count==3){document.getElementById("winner").innerHTML="WINNER IS:"+player;
    movenumber=10;
    styleDiag2()
    
    return}
  }
  

    x.push(parseInt(item[0]))
    y.push(parseInt(item[1]))

    console.log("x",player,x)
    console.log("y",player,y)

    let x0 = countOccurrences(x,0)
    let x1 = countOccurrences(x,1)
    let x2 = countOccurrences(x,2)
    let y0 = countOccurrences(y,0)
    let y1 = countOccurrences(y,1)
    let y2 = countOccurrences(y,2)

    let final = [x0,x1,x2,y0,y1,y2]
    console.log(final)
    if(countOccurrences(final,3))
    {
      document.getElementById("winner").innerHTML="WINNER IS:"+player
      movenumber=10;
      
    }
    if(movenumber==9){
      document.getElementById("winner").innerHTML="DRAW"
    }
    if(x0==3){
      styleDiag3()
    }   
  }
)
   
}

//Function Style Diagonal One

const styleDiag1 = () =>{
  document.querySelector('[data-coord="1,1"]').style.background = "red";
  document.querySelector('[data-coord="0,0"]').style.background = "red";
  document.querySelector('[data-coord="2,2"]').style.background = "red";
}
const styleDiag2 = () => {
  document.querySelector('[data-coord="2,0"]').style.background = "red";
  document.querySelector('[data-coord="1,1"]').style.background = "red";
  document.querySelector('[data-coord="0,2"]').style.background = "red";
}
const styleDiag3 = () => {
  document.querySelector('[data-coord="0,0"]').style.background = "red";
  document.querySelector('[data-coord="0,1"]').style.background = "red";
  document.querySelector('[data-coord="0,2"]').style.background = "red";
}
//Function countOccurances - calulate the winner
const countOccurrences = (arr, val)=> arr.reduce((a,v) => (v=== val? a+1 : a ),0);
function refreshpage(){
  window.location.reload();
}
