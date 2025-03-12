import { useState } from "react"; //CONCEPT OF HOOKS FOR FBC BECAUSE FUNCTION BASED COMPONENTS(FBC)ARE STATELESS AND HOOKS ARE PRESENT IN REACT LIBRARY // HOOKS ARE INBUILT FUNCTIONS IN REACT ARE RECOGNISED BY WORD "USE"

const States = () =>{   //STATES IS AREA WHERE DATA CAN DE STORED INSIDE A COMPONENT   //WE ARE USING "USESTATE" HOOK here
  let [state, setState] = useState("Hello");//ARRAY DESTRUCTURING WILL BE USED BECAUSE HOOKS ARE ALREADY BEEN PRESENT WITH TWO ELEMENT 1. UNDEFINED, VARIABLE   EX:- [undefined,f]
  console.log(state); // IF WE HAVE TO DISLPAY ON SCREEN THEN USE EXPRESSION IN RETURN STATEMENT i.e XML FILE
  let [cart,setCart] = useState("add to cart");// THIS IS ALSO A HOOK BUT IN THIS THE FUNCTION FOR THIS HOOK IS ITSELF MADE INSIDE THE BUTTON NAMED ADD TO CART 
  function btnclick() {
    console.log("btn clicked");// FUNCTION FOR THE CLICK BUTTON
    setState("Byee");
  }
    return(  //WE CAN ONLY WRITE XML INSIDE RETURN STATEMENT JAVA SCRIPT CAN NOT BE WRIITEN
        <div>
            <h1>States in FBC  {state}</h1>   {/*EXPRESSION IS USED TO USE JAVA SCRIPT INSIDE RETURN STATEMENT*/}
            <button onClick={btnclick}>Click</button>  
            <button onClick={()=>{setCart("Go to cart")}}>{cart}</button>  {/*IN THIS FUCNTION IS MADE INSIDE THE BUTTON UNLIKE THE CLICK BUTTON */}
        </div>
    );
}; 
export default States;