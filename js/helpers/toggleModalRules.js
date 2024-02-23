const $modalRulesContainer = document.getElementById("modal-rules-container");
const $modalRules = document.getElementById("modal-rules");

const toggleModalRules = () => {
  if (
    !$modalRulesContainer.classList.contains("modal-rules-continer--is-active")
  ) {
    // open modal
    $modalRulesContainer.classList.remove("d-none");
    setTimeout(() => {
      $modalRulesContainer.classList.add("modal-rules-continer--is-active");
      $modalRules.classList.add("modal-rules--is-active");
    }, 0);
  } else {
    // close modal
    $modalRulesContainer.classList.remove("modal-rules-continer--is-active");
    $modalRules.classList.remove("modal-rules--is-active");
    setTimeout(() => {
      $modalRulesContainer.classList.add("d-none");
    }, 300);
  }
};

export default toggleModalRules;
