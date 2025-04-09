import { useState } from "react"
import UserContext from "./UserContext"
import Component1 from "../Component1"

const UserContextProvider = () => {
    const [user, setUser] = useState("Jack Reacher")
    return (
        <UserContext.Provider value={{user, setUser}}>
            <h1> Hi, I am {user} </h1>
            <p> I am learning Context API or useContext</p>
            <Component1/>
        </UserContext.Provider>
    )
}

export default UserContextProvider;