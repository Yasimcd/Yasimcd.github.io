var trea = Math.floor(Math.random() *12)
var bomb = Math.floor(Math.random() *12)
var tree = Math.floor(Math.random() *12)

const treasure = (n) =>{
    if (n === trea) {
    document.getElementById(n).innerHTML="&#x1f308"
    alert("You win!!!")
    document.getElementById(n).innerHTML= herf= ("https://www.pngkey.com/png/detail/548-5481911_treasure-hunt-chest-items.png");
  }
  else if (n === bomb) {
    document.getElementById(n).innerHTML="&#x2620"
    alert("Game Over.")
  }
  else {
    document.getElementById(n).innerHTML="&#x1f332"
  }
}
