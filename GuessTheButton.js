const random = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
function randomDraw(buttonNumber) {
  if (random == buttonNumber) {
  	alert("CONGRATULATIONS! Winner Winner Chicken Dinner");
  } else {
  	alert("It was button #" + random + ". Click OK to Try again!");
  }
  location.reload();
}
