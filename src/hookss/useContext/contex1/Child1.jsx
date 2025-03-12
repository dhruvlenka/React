import { useContext } from "react";
import { GlobalData } from "./Context";

const Child1 = () => {
    let val = useContext(GlobalData);
    console.log(val);
    return (
        <div>
            <h1>I am Child1</h1>
        </div>
    )
}
export default Child1;