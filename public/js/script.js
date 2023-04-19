const naam = document.querySelector("#name");

naam.addEventListener("input", (event) => {
  setName = naam.value;

  localStorage.setItem("name", setName);
});

const getName = localStorage.getItem("name");

if (getName) {
  naam.value = getName;
}
