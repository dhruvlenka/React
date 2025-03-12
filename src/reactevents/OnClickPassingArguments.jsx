import React from 'react'

const OnClickPassingArguments = () => {
    const shoot = (a) => {
        alert(a);
    }
  return (
    <div>
        <h1> onClick Passing arguments </h1>
        <p> Football Example </p>
        <button onClick={() => shoot("Messi hit the Goal")}> Take the shot! </button>
    </div>
  )
}

export default OnClickPassingArguments