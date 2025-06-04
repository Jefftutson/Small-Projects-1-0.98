const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

document.body.addEventListener("dragstart", dragStart);
document.body.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  if (!e.target.classList.contains("fill")) {
    e.preventDefault();
    return;
  }

  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("invisible"), 0);
}

function dragEnd(e) {
  e.target.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop(e) {
  this.className = "empty";
  const dragged = document.querySelector(".fill.hold.invisible");
  if (dragged) {
    this.append(dragged);
  }
}
