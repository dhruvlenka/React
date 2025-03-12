import React, { useState } from 'react'

function LearningUseState() {
    const [color, setColor] = useState("red");
      
    return (
        <div>
        <h1 style={{color: color}} >My favorite color is {color}!</h1>
        <button type="button" onClick={() => setColor("teal")}> Teal </button>
        <button type="button" onClick={() => setColor("blue")}> Blue </button>
        <button type="button" onClick={() => setColor("red")}> Red </button>
        <button type="button" onClick={() => setColor("magenta")}> Magenta </button>
        <button type="button" onClick={() => setColor("green")}> Green </button>
        </div>
    );
  }
  
export default LearningUseState;