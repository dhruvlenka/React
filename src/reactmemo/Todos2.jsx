import React from "react";

const Todos2 = React.memo(function Todos2({ text }) {
    console.log('Child Rendered');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return (
      <div>
        <h2>{text}</h2>
        <p>Computed Value: {result}</p>
      </div>
    );
  });

  export default Todos2;