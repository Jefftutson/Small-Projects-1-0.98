const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "I, Giorno Giovanna, have a dream.";

let idx = 1;
let speed = 700 / speedEl.value;

writeText();

function writeText() {
  textEl.innerHTML = text.slice(0, idx);

  if (idx > text.length) {
    idx = 1;
  }
  idx++;

  // timers need clearing and stuff idk i will try to fix it like i like later inshallah
  //   if (text[idx - 2] === "," || text[idx - 2] === ".") {
  //     setInterval(writeText, speed * 2);
  //   } else if (textEl[idx - 2] === " ") {
  //     setInterval(writeText, speed / 4);
  //   } else {
  //     setTimeout(writeText, speed);
  //   }

  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 700 / e.target.value));
