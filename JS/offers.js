const offers = document.querySelector(".offers-items");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
let index = 0;
function slider(to) {
  const total = offers.children.length;
  index = (index + to + total) % total;
  offers.style.transform = `translatex(-${index * 100}%)`;
}
next.onclick = () => slider(1);
prev.onclick = () => slider(-1);

setInterval(() => slider(1), 5000);
 