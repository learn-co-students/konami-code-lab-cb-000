const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let i = 0

  document.body.addEventListener('keydown', event => {
    const keyName = parseInt(event.which || event.detail)

    code[i] === keyName ? i++ : (i = 0)

    if (i === code.length) {
      alert('Hurray!')
    }
  })
}
