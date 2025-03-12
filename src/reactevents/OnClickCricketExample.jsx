import React from 'react'

const OnClickCricketExample = () => {
    //shoot function
    const shoot = () =>  {
        alert("A Great Shot by Rohit Sharma");
    }
    //returning a h1 tag, a paragraph and a button
  return (
    <div>
        <h1> onClick Events </h1>
        <p> Cricket Example</p>
        <button onClick={shoot}> Bowl </button>
    </div>
  )
}

export default OnClickCricketExample;