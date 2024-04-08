import randomHouseSelect from "./functionalities/randomHouseSelect.js";
import setGameScore from "./functionalities/gameScore.js";
import setTheWinner from "./functionalities/setTheWinner.js";

const $board = document.getElementById("board"),
  $bgTriangle = document.getElementById("bg-triangle"),
  $select1 = document.getElementById("select-1"),
  $select2 = document.getElementById("select-2"),
  $select3 = document.getElementById("select-3"),
  $select1Base = document.getElementById("select-1-base"),
  $select2Base = document.getElementById("select-2-base"),
  $select3Base = document.getElementById("select-3-base"),
  $rsActions = document.getElementById("rs-actions"),
  $resultMsg = document.getElementById("result-msg"),
  $optBaseMsgs = document.querySelectorAll(".opt-base__msg");

const resultsScreen = (playerSelect, houseSelect, winner) => {
  $board.classList.remove("game-board");
  $board.classList.add("results-board");

  $optBaseMsgs[0].classList.remove("d-none");
  $optBaseMsgs[1].classList.remove("d-none");

  $bgTriangle.classList.add("d-none");
  $select3Base.classList.add("d-none");
  $select1.classList.add("d-none");
  $select2.classList.add("d-none");
  $select3.classList.add("d-none");
  $select1.classList.add("cursor-default");
  $select2.classList.add("cursor-default");

  $select1Base.classList.remove("opt-base--scale-hover");
  $select2Base.classList.remove("opt-base--scale-hover");

  $rsActions.classList.add("v-hidden");
  $rsActions.classList.remove("d-none");

  /* player select */
  if (playerSelect === "rock") {
    $select1.classList.remove("paper-color");
    $select1.classList.add("rock-color");
    $select1.children[0].src = "./assets/images/icon-rock.svg";
  } else if (playerSelect === "paper") {
  } else if (playerSelect === "scissors") {
    $select1.classList.remove("paper-color");
    $select1.classList.add("scissors-color");
    $select1.children[0].src = "./assets/images/icon-scissors.svg";
  } else {
    return console.error("error");
  }

  /* house select */
  if (houseSelect === "rock") {
    $select2.classList.remove("scissors-color");
    $select2.classList.add("rock-color");
    $select2.children[0].src = "./assets/images/icon-rock.svg";
  } else if (houseSelect === "paper") {
    $select2.classList.remove("scissors-color");
    $select2.classList.add("paper-color");
    $select2.children[0].src = "./assets/images/icon-paper.svg";
  } else if (houseSelect === "scissors") {
  } else {
    return console.error("error");
  }

  if (winner === "player") {
    $resultMsg.textContent = "you win";
  } else if (winner === "house") {
    $resultMsg.textContent = "you lose";
  } else if (winner === "none") {
    $resultMsg.textContent = "tie";
  } else {
    return console.error("error");
  }

  setTimeout(() => {
    $select1.classList.remove("d-none");
  }, 700);

  setTimeout(() => {
    $select2.classList.remove("d-none");
  }, 1600);

  setTimeout(() => {
    $rsActions.classList.remove("v-hidden");
    document.getElementById("score-number").textContent =
      localStorage.getItem("game-score");
  }, 2200);
};

export const returnToGame = () => {
  $board.classList.remove("results-board");
  $board.classList.add("game-board");

  $optBaseMsgs[0].classList.add("d-none");
  $optBaseMsgs[1].classList.add("d-none");

  $resultMsg.textContent = "";
  $rsActions.classList.add("d-none");

  $select1.children[0].src = "./assets/images/icon-paper.svg";
  $select2.children[0].src = "./assets/images/icon-scissors.svg";
  $select3.children[0].src = "./assets/images/icon-rock.svg";

  $select1.classList.remove("cursor-default");
  $select2.classList.remove("cursor-default");
  $select1Base.classList.add("opt-base--scale-hover");
  $select2Base.classList.add("opt-base--scale-hover");

  $select1.classList.remove("rock-color");
  $select1.classList.remove("scissors-color");
  $select2.classList.remove("paper-color");
  $select2.classList.remove("rock-color");
  $select3.classList.remove("paper-color");
  $select3.classList.remove("scissors-color");

  $select3.classList.remove("d-none");
  $select3Base.classList.remove("d-none");
  $bgTriangle.classList.remove("d-none");

  $select1.classList.add("paper-color");
  $select2.classList.add("scissors-color");
  $select3.classList.add("rock-color");
};

const runGame = (playerSelect) => {
  let houseSelect = randomHouseSelect(),
    winner = setTheWinner(playerSelect, houseSelect);

  if (winner === "player") setGameScore(1);
  if (winner === "house") setGameScore(-1);
  resultsScreen(playerSelect, houseSelect, winner);
};

export default {
  runGame,
  returnToGame,
  resultsScreen,
};
