import React from 'react'
import Component5 from './Component5'

const Component4 = ({user}) => {
  return (
    <div>
        <h1> I am Component 4 </h1>
        <Component5 user={user}/>

    </div>
  )
}

export default Component4