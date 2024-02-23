const setTheWinner = (playerSelect, houseSelect) => {
  let winner;
  if (playerSelect === "rock") {
    if (houseSelect === "rock") winner = "none";
    if (houseSelect === "paper") winner = "house";
    if (houseSelect === "scissors") winner = "player";
  } else if (playerSelect === "paper") {
    if (houseSelect === "rock") winner = "player";
    if (houseSelect === "paper") winner = "none";
    if (houseSelect === "scissors") winner = "house";
  } else if (playerSelect === "scissors") {
    if (houseSelect === "rock") winner = "house";
    if (houseSelect === "paper") winner = "player";
    if (houseSelect === "scissors") winner = "none";
  } else {
    return console.error("error");
  }
  return winner;
};

export default setTheWinner;
