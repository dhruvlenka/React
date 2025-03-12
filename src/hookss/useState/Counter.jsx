import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(1) 
    console.log(count);
  return (
    <div>
        <h1> Counter {count} </h1>
        <h6> Number is {count % 2 === 0? "Even": "Odd"}</h6>
        <button onClick={() => setCount(count+1)}> Increment </button>
        <button onClick={() => {
            if(count > 0){
                setCount(count-1);
            }
        }}> Decrement </button>
        <button onClick={() => setCount(0)}> Reset </button>
    </div>
  )
}

export default Counter