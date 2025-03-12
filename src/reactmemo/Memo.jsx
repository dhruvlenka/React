import React, { useState } from 'react'
import Todos from './Todos';

function Memo() {
    const [count, setCount] = useState(0);
  
    return (
      <div>\
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Todos text="I am an expensive component" />
      </div>
    );
  }
  
  export default Memo;