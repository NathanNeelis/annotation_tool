const consentButton = document.querySelector(".consentBtn");

consentButton.addEventListener("click", (event) => {
  localStorage.setItem("consent", true);
  window.location.href = "/instructions";
});

const consent = localStorage.getItem("consent");

if (consent) {
  console.log("There is a consent");
  window.location.href = "/instructions";
} else {
  console.log("There is no consent");
  window.location.href = "/";
}
