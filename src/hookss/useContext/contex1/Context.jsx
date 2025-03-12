import { createContext } from "react";
import Child1 from "./Child1";

export let GlobalData = createContext();

const Context = ({children}) => {
    let str  = "Hello World"
    return (
        <div>
            <GlobalData.Provider value={str}>
                {children}
            </GlobalData.Provider>
        </div>
    )
}
export default Context;