const random = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
function randomWinner(buttonNumber) {
  if (random == buttonNumber) {
  	alert("YOU WIN! CONGRATULATIONS!");
  } else {
  	alert("YOU LOSE! The winner button was " + random + ". TRY AGAIN!");
  }
  location.reload();
}
