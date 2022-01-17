var treasure = Math.floor(Math.random() *11)
var bomb = Math.floor(Math.random() *11)

while (treasure === bomb) {
  bomb = Math.floor(Math.random() *11)
}
console.log("treasure", treasure);
console.log("bomb", bomb);
const findtreasure = (n) =>{

  if (n == treasure) {
    document.getElementById(n).innerHTML="&#x1f308"
    document.getElementById("game-board").innerHTML='<img src="box.png" height="438px" width="344px"/>'
    alert("You found the treasure!!! Enjoy")
  }
  else if (n === bomb) {
    document.getElementById(n).innerHTML="&#x2620"
    document.getElementById("game-board").innerHTML='<img src="boom!.png" height="438px" width="344px"/>'
    alert("Better luck next time!")
  }
  else {
    document.getElementById(n).innerHTML="&#x23F3"
  }

}
