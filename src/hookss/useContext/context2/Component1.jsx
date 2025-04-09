import { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {
    const [user, setUser] = useState("Jack Reacher");
    return (
        <div>
            <h1>{`Hello ${user}`}</h1>
            <Component2 user={user}/>
        </div>
    )
}
export default Component1;