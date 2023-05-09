const showInstructions = document.querySelector(".showInstructions");
const instructionPopup = document.querySelector(".instructionsPopup");

let state = true;

showInstructions.addEventListener("click", (event) => {
  state = !state;

  if (state) {
    instructionPopup.classList.add("hidden");
    showInstructions.textContent = "Instructions";
  } else {
    instructionPopup.classList.remove("hidden");
    showInstructions.textContent = "Close";
  }
});
