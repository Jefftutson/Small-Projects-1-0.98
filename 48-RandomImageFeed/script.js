const container = document.querySelector(".container");
const imgUrl = "https://picsum.photos/";

const rows = 10;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement("img");
  img.src = `${imgUrl}${getRandomSize()}/`;
  container.appendChild(img);
}

function getRandomSize() {
  return `${getRandomNr()}/${getRandomNr()}`;
}

function getRandomNr() {
  return Math.floor(Math.random() * 10) + 300;
}
