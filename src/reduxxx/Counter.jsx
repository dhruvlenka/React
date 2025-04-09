import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
    const count = useSelector((state) => state.count); //read state
    const dispatch = useDispatch(); //dispatch function
    
  return (
    <div>
        <h2>Count: {count} </h2>
        <button onClick={() => dispatch({type: 'INCREMENT'})}> Increment </button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}> Decrement </button>
    </div>
  )
}

export default Counter;