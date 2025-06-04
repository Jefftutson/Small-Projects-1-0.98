const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");

let clickTime = 0;
let timesClicked = 0;

//THE EASY WAY
// loveMe.addEventListener("dblclick", (e) => {});

//Learning
//the double click
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

//creating the actual heart
const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  // the previous way was causing the heart to exist in the wrong place because it took the position according to the loveMe regardless of the e.target position
  //   const leftOffset = e.target.offsetLeft;
  //   const topOffset = e.target.offsetTop;

  const loveMeRect = loveMe.getBoundingClientRect();

  //   const xInside = x - leftOffset;
  //   const yInside = y - topOffset;

  const xInside = x - loveMeRect.left;
  const yInside = y - loveMeRect.top;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked;

  //cleaning
  setTimeout(() => heart.remove(), 1000);
};
