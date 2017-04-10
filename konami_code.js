const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  var index = 0
  dbody = document.querySelector('body')
  dbody.addEventListener('keydown', onKeyDownHandler)

  function onKeyDownHandler(e){
    const key = parseInt(e.detail || e.which)

    if(code[index] === key){
      index++

      if(index === code.length - 1){
        console.log('hurrry')
        alert('hurraaasssh')
        index = 0
      }else{
        console.log(`${index} : ${code.length-1} : ${index === code.length-1}`)
      }
    }else{
      index = 0
    }
  }
}
