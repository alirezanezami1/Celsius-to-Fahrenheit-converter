
/////////////// Convert ///////////////////

let hedTitle = document.querySelector('.hedTitle')
let input = document.getElementById('inputType')
let textH3 = document.querySelector('.textH3')


function change() {
      if (input.getAttribute('placeholder') == "°C"){
        hedTitle.innerHTML = 'Converter °F to °C'
        input.setAttribute('placeholder' , '°F')
        focusInput()
        input.value = ""
      } else if (input.getAttribute('placeholder') == "°F") {
        hedTitle.innerHTML = 'Converter °C to °F'
        input.setAttribute('placeholder' , '°C')
        focusInput()
        input.value = ""
      }
}


function convert() {
  if (input.value == ''){
     textH3.style.display = 'inline'
  } else if (isNaN(input.value)){
    textH3.innerHTML = 'Wrong value'
    textH3.style.display = 'inline'
    textH3.style.color = 'red'
  } else if (input.getAttribute('placeholder') == "°C"){
    let resC = (input.value * 9/5 ) + 32
     textH3.innerHTML = `${input.value} °C to ${resC} °F`
     textH3.style.color = 'rgb(10, 211, 144)'
     textH3.style.display = 'inline'
  } else if (input.getAttribute('placeholder') == "°F"){
    let resF = (input.value - 32) * 5/9
    textH3.innerHTML =  `${input.value} °F to ${resF.toFixed(2)} °C`
    textH3.style.color = 'rgb(10, 211, 144)'
     textH3.style.display = 'inline'
  }
}

function focusInput() {
  textH3.style.display = 'none'
  input.value = ""
}

function reset() {
  textH3.style.display = 'none'
  input.value = ""
}






