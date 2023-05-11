import { useState } from "react"

export const useCounter=({initialValue=0,stock=5})=>{

          const [counter, setCounter] = useState(initialValue)  

            const increment =(value=1)=>{
                
                if(counter<stock){
                    setCounter(counter + value );
                }
                
                
            }
            
            const decrement =(value=1)=>{
                if(counter>initialValue){
                    setCounter(counter - value);
                }
                
            }

            const reset =()=>{
                setCounter(initialValue);
            }


    return {
        
        counter,
        increment,
        decrement,
        reset,

    }
}