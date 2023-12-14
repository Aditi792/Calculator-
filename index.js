
const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".output")
let screenValue = " "

buttons.forEach(button => {
   button.addEventListener("click", (e)=>{

    let ButtonPressValue = e.target.innerText

    if (ButtonPressValue == "AC" ){
        screenValue = " "
        screen.innerHTML = screenValue
    }
    else if (ButtonPressValue == "DEL" ){
        screenValue =screenValue.substring(0,screenValue.length -1 )
        screen.innerHTML = screenValue
    }

    else if(ButtonPressValue == "="){

        screenValue = eval(screenValue)
        screen.innerHTML = screenValue
        
    }
    else{
        screenValue += ButtonPressValue
        screen.innerHTML = screenValue

    }
   })
});

