import { Plus, Minus } from "lucide-react";
import { useState } from "react";
function CounterDisplay(){
    const [counter, setCounter]= useState(0);

    function increamentHandler(){
        setCounter((prev)=>prev+1);
    }

    function decreamentHandler(){
        setCounter((prev)=>prev-1);
    }

    return(
        <div>
            <Plus onClick={increamentHandler}/>
            <h3>{counter}</h3>
            <Minus onClick={decreamentHandler}/>
        </div>
    )
}

export default CounterDisplay;