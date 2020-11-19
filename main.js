let button = document.querySelector("#changeBackground")
let display = document.getElementById('button-div')

let output = document.createElement('div')
output.id = 'output'

let css = output.style

css.padding = '3rem 7rem'
css.margin = '2rem auto 0 auto'
css.borderRadius = '10%'
css.backgroundColor = "#f4f4f4"
css.display = "flex"
css.justifyContent = 'center'
css.alignItems = 'center'
css.fontSize = '5rem'
css.fontFamily = 'Arial, Helvetica, sans-serif'
css.maxWidth = '70%'

let mediaQuery = window.matchMedia("(max-height: 1000px)")
  if (mediaQuery.matches){
    css.padding = '2rem 5rem'
    css.margin = '2rem auto 0 auto'
    css.fontSize = '3rem'    
  }

  mediaQuery = window.matchMedia("(max-height: 500px)")
  if (mediaQuery.matches){
    css.padding = '2rem 5rem'
    css.margin = '5rem auto 0 auto'
    css.fontSize = '2rem'
    css.marginTop = '2.5rem'
  }
  
  mediaQuery = window.matchMedia("(max-width: 500px)")
  if (mediaQuery.matches){
    css.padding = '2rem 5rem'
    css.margin = '10rem auto 0 auto'
    css.fontSize = '2.5rem'
  }

display.appendChild(output)



    let setBg = () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        randomColor = document.body.style.backgroundColor = "#" + randomColor;
        output.textContent = randomColor
      }
    
    
      
      button.addEventListener("click", setBg);
      setBg();


      
      

