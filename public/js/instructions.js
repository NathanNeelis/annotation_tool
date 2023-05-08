const instructionID = document.querySelector("#annotateID");

instructionID.addEventListener("input", (event) => {
  id = instructionID.value;
  localStorage.setItem("instructions", id);
});

const instructions = localStorage.getItem("instructions");

if (instructions) {
  console.log("Instructions have been read");
  window.location.href = "/" + instructions;
} else {
  console.log("Has not read the instructions yet");
}
