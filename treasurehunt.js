var trea = Math.floor(Math.random() *12)
var bomb = Math.floor(Math.random() *12)

while (trea === bomb) {
  bomb = Math.floor(Math.random() *12)
}
console.log("trea", trea);
console.log("bomb", bomb);
const treasure = (n) =>{


  if (n == trea) {
    document.getElementById(n).innerHTML="&#x1f308"
    document.getElementById("game-board").innerHTML='<img src="treasurebox.png"/>'

  }
  else if (n === bomb) {
    document.getElementById(n).innerHTML="&#x2620"
    document.getElementById("game-board").innerHTML='<img src="skull.png"/>'
  }
  else {
    document.getElementById(n).innerHTML="&#x1f332"
  }

}
