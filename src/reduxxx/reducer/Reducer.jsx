import { act, useReducer } from "react";

let initialState = 0;

function reducerFunc(state, action) {
    switch(action){
        case "Increment":
        return state + 1

        case "Decrement":
            return state - 1

        case "Reset":
            return 0

        default:


    }
}

const Reducer = () => {
    let[state, dispatch] = useReducer(reducerFunc, initialState);

    return (
        <div>
            <h1> Learn useReducer</h1>
            <h2> Counter: {state} </h2>
            <button onClick={() =>  dispatch("Increment")}> Increment </button>
            <button onClick={() =>  dispatch("Decrement")}> Decrement </button>
            <button onClick={() =>  dispatch("Reset")}> Reset </button>
        </div>
    )
}
export default Reducer;