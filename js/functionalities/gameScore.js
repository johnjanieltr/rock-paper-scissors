const $scoreNumber = document.getElementById("score-number");

const setGameScore = (score = undefined) => {
  let gameScore;

  if (!score) {
    if (!localStorage.getItem("game-score")) {
      /* run this if the user is playing for the first time */
      gameScore = 0;
      localStorage.setItem("game-score", gameScore);
      $scoreNumber.textContent = gameScore;
      return;
    }

    /* run this if the user has played before */
    gameScore = localStorage.getItem("game-score");
    if (isNaN(gameScore)) {
      console.error("local storage punctuation error");
      gameScore = 0;
      localStorage.setItem("game-score", gameScore);
      $scoreNumber.textContent = gameScore;
      return;
    }
    document.getElementById("score-number").textContent = gameScore;
    return;
  }

  if (score) {
    if (score === 1) {
      /* run this to add 1 point (win) */
      gameScore = localStorage.getItem("game-score");
      gameScore++;
      localStorage.setItem("game-score", gameScore);
      return;
    }

    if (score === -1) {
      /* run this to subtract 1 point (lose) */
      gameScore = localStorage.getItem("game-score");
      gameScore--;
      if (gameScore < 0) gameScore = 0;
      localStorage.setItem("game-score", gameScore);
      return;
    }
  }

  return console.error(
    "Internal Error: error sending parameter to the function"
  );
};

export default setGameScore;
