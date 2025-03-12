import { useState } from "react";  //IMPORTING HOOK FROM REACT LIBRARY

const Counter = () => { //WHENEVER STATE IS UPDATED THEN COMPONENET IS RERENDERED ON DISPLAY
    console.log("counter component"); //IT WILL DISPLAY THIS STATEMENT ON CONSOLE
    let [count,setCount] = useState(0);   //IT WILL START THE COUNTER FROM 0 AS WE HAVE DECLARED  0 IN IT 
    return(
        <div>
            <h1>Counter {count}</h1>
            <button onClick={() => setCount(count + 1)}>increment</button>  {/*INCREMENT BUTTON FOR ADD TO CART LIKE OPTIONS WITH CALLBACK FUNCTION INSIDE IT */}
            <button onClick={() => {
                if (count > 0) {   //BY THIS THE COUNTER WILL NOT GO IN NEGATIVE SIDE
                    setCount(count - 1);
                }
            }}>decrement</button>  {/*DECREMENT BUTTON FOR ADD TO CART LIKE OPTIONS WITH CALLBACK FUNCTION INSIDE IT */}
            <button onClick={() => setCount(0)}>reset</button>     {/*USED FOR RESETING THE COUNT IT WILL DISPLAY THE VALUE WHICH WE HAD DECLARED INSIDE IT */}
        </div> 
    );
};
export default Counter;