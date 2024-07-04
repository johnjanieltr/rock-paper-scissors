import { runGame, returnToGame } from "./js/game.js";
import setGameScore from "./js/gameScore.js";
import searchDataset from "./js/searchDataset.js";
import toggleModalRules from "./js/toggleModalRules.js";

const $screenLoader = document.getElementById("s-loader"),
  $secsWrapper = document.getElementById("secs-wrapper");

// this variable handles when it is available to choose an option (play the game)
let chooseOptionsIsActive = false;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    $screenLoader.classList.add("d-none");
    chooseOptionsIsActive = true;
  }, 2000);
  $secsWrapper.style.height = window.innerHeight + 1 + "px";
  setGameScore();
});

document.addEventListener("click", (e) => {
  const etm = (selector) => e.target.matches(selector);

  // click on rules button
  if (etm("#rules-btn")) toggleModalRules();
  // click on close button of modal rules
  if (etm("#close-btn") || etm("#close-btn *")) toggleModalRules();
  // click on options (rock paper or scissors)
  if (etm(".opt-base") || etm(".opt-base *")) {
    if (chooseOptionsIsActive) {
      runGame(searchDataset(e.target).select);
      chooseOptionsIsActive = false;
    }
  }
  // click on play again button of result screen
  if (etm("#play-again-btn")) {
    returnToGame();
    chooseOptionsIsActive = true;
  }
});
