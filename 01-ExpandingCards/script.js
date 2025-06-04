const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();
    panel.classList.add("active");
  });
});
function removeActiveClass() {
  panels.forEach((panel) => panel.classList.remove("active"));
}

//if want to make it a toggle add an if that checks if the class is active? remove active : remove all add active
