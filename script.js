const inp =document.getElementById("display")
const buttons =document.querySelectorAll("button")


buttons.forEach((button) => {

    button.addEventListener("click" , function(){

        switch (button.textContent) {
            case "C":

                inp.value= ""
                
                break;

                case "⌫":

                inp.value= inp.value.slice(0, -1) 

                break;

                case "=":

                try {

                    inp.value= eval(inp.value)
                    
                } catch (error) {

                    inp.value="error"
                    
                }

                break;
        
            default:
                inp.value += button.textContent
                break;
        }


        



    });
    
});