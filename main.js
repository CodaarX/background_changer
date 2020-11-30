// select the button 
let button = document.querySelector("#changeBackground")

// select the display
let display = document.getElementById('button-div')

// create the output
let output = document.createElement('div')
output.id = 'output'


//style the output
let outputStyle = output.style

outputStyle.padding = '3rem 7rem'
outputStyle.margin = '2rem auto 0 auto'
outputStyle.borderRadius = '10%'
outputStyle.backgroundColor = "#f4f4f4"
outputStyle.display = "flex"
outputStyle.justifyContent = 'center'
outputStyle.alignItems = 'center'
outputStyle.fontSize = '5rem'
outputStyle.fontFamily = 'Arial, Helvetica, sans-serif'
outputStyle.maxWidth = '70%'

// control media query

let mediaQuery = window.matchMedia("(max-height: 1000px)")
  if (mediaQuery.matches){
    outputStyle.padding = '2rem 5rem'
    outputStyle.margin = '2rem auto 0 auto'
    outputStyle.fontSize = '3rem'    
  }

  mediaQuery = window.matchMedia("(max-height: 500px)")
  if (mediaQuery.matches){
    outputStyle.padding = '2rem 5rem'
    outputStyle.margin = '5rem auto 0 auto'
    outputStyle.fontSize = '2rem'
    outputStyle.marginTop = '2.5rem'
  }
  
  mediaQuery = window.matchMedia("(max-width: 800px)")
  if (mediaQuery.matches){
    outputStyle.padding = '2rem 5rem'
    outputStyle.margin = '2rem auto 0 auto'
    outputStyle.fontSize = '2.5rem'
  }


// append output to display
display.appendChild(output)

//    logic for background change
    let setBg = () => {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);

        newRandomColor = document.body.style.backgroundColor = "#" + randomColor;
        
        output.innerHTML = newRandomColor
      }
    
    
//      add event listener to the button
      button.addEventListener("click", setBg);
      setBg();


      
      

