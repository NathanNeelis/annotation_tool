console.log(window.location.pathname);

const consentButton = document.querySelector(".consentBtn");

consentButton.addEventListener("click", (event) => {
  localStorage.setItem("consent", true);
});

const path = window.location.pathname;
const consent = localStorage.getItem("consent");

if (path === "/") {
  console.log("match");
  if (consent) {
    console.log("There is a consent");
    window.location.href = "/instructions";
  } else {
    console.log("There is no consent");
  }
}
