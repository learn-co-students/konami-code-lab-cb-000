Konami

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

function init() {
  var index = 0;
  const input = document.querySelector('body')

  input.addEventListener('keydown', function(e) {

      const key = e.key;

      if (key === codes[index]) {
        index++;

        if (index === codes.length) {
          alert('Congratz!');

          index = 0;
        }
      } else {
        index = 0;
    }
  });
}
