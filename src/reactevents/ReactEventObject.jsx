import React from 'react'

const ReactEventObject = () => {
    const shoot = (a,b) => {
        alert(a) //Goal
        alert(a.type) //undefined 
        alert(b) //[object, object]
        alert(b.type) //click
    }
  return (
    <div>
     <h1> ReactEventObject </h1>
     <button onClick={(event) => shoot("Goal", event)}> Take the shot. </button>
    </div>
  )
}

export default ReactEventObject