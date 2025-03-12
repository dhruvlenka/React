import React from 'react'

const MouseOverEvent = () => {
    const run = (a) => {
        a = "I am Mouse Over"
        return a;
    }
  return (
    <div onMouseOver={run}>MouseOverEvent</div>
  )
}

export default MouseOverEvent