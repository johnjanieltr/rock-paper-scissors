const BASIC_OPTIONS = ["rock", "paper", "scissors"];

const randomHouseSelect = () => BASIC_OPTIONS[Math.floor(Math.random() * 3)];

export default randomHouseSelect;
