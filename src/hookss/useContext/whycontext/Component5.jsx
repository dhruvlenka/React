import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const Component5 = () => {
    const {user, setUser} = useContext(UserContext);
  return (
    <div>
        <h1> I am Component 5 </h1>
        <p>{`Again welcome ${user}.`}</p>
        <button onClick={() => setUser("Bruce Wayne")} style={{backgroundColor: 'yellow', padding: 5}}> Change User </button>
    </div>
  )
}

export default Component5;