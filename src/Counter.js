import React, {useState} from "react";
import Button from './components/Buttons';

function Counter(){
    var [counter, setCount] = useState(0);
    const [txt, addNewText] = useState("Tekst kommer her");
   
   

    const countUp = () => { // eventhandleren til knappen (funskjon skrevet som en const)
        console.log('Du trykket på knappen');
        
        setCount(counter +1);
      };
    
      const countDown = () => {
        if(counter > 0){
            setCount(counter -1);
        }
        else{
          alert('for lav sum')
        }
     
      };
    
      const restart = () => {
        setCount(counter = 0);
      };
      const addText = () => {
        
        addNewText('Det ble en ny tekst her!');
      }

    
    return (
        <div>
            <p>Count: {counter}</p>
            <p>{txt}</p>
            <Button onClick={countUp}> +1 </Button>
            <Button onClick={countDown}> -1 </Button>
            <Button onClick={restart}> restart </Button>
            <Button onClick={addText}>Legg til tekst</Button>
        </div>
    )
}

export default Counter;