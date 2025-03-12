import React from 'react'
import { useState } from 'react';

// useState hooks followed by multiple states
function LearningUseState2() {
   const [brand, setBrand] = useState("Audi");
   const [mobile, setMobile] = useState("Apple iPhone 16 Pro")
  return (
    <div>
        <h1 style={{color: "blue"}}> Creating Multiple State Hooks </h1>
        <h2> I am {brand}</h2>
        <button onClick={() => setBrand("BMW🏎️")}> BMW </button>
        <button onClick={() => setBrand("Mercedes🏎️")}> Mercedes </button>
        <button onClick={() => setBrand("Ferrari🏎️")}> Ferrari </button>
        <button onClick={() => setBrand("McLaren")}> McLaren </button>
        <button onClick={() => setBrand("Ferrari🏎️")}> Ferrari </button>
        <button onClick={() => setBrand("Porsche🏎️")}> Porsche </button>
        <button onClick={() => setBrand("Lexus🚙")}> Lexus </button>
        <button onClick={() => setBrand("Royals Royce 🏎️")}> Royals Royce </button>

        <h2> I am {mobile}</h2>
        <button onClick={() => setMobile("Samsung S24 Ultra")}> Samsung </button>
        <button onClick={() => setMobile("Redmi Pro")}> Redmi </button>
        <button onClick={() => setMobile("Realme Pro")}> Realme</button>
        <button onClick={() => setMobile("One Plus 50")}> One Plus</button>
        <button onClick={() => setMobile("Vivo Pro")}> Vivo</button>
        <button onClick={() => setMobile("Poco Pro")}> Poco </button>
        <button onClick={() => setMobile("Motorola G15 Pro")}> Motorola </button>
        <button onClick={() => setMobile("Nothing")}> Nothing </button>

    </div>

  );
};

export default LearningUseState2;