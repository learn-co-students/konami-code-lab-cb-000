const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0

function init() {
  document.body.addEventListener('keydown', kcode);
}

function kcode(e) {
  let key = e.key;
  if (key === codes[index] && key === "a") {alert("Nice job inputting the code")}
  else if (key === codes[index]) {index += 1}
  else {index = 0}
}
