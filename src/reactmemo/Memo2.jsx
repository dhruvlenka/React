import React, { useState } from 'react'
import Todos2 from './Todos2';

function Memo2() {
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Todos2 text="I am an expensive component" />
      </div>
    );
  }
  
  export default Memo2;