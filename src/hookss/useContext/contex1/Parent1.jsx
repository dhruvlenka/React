import Child1 from "./Child1";
import Context from "./Context";

const Parent1 = () => {
    return (
        <div>
            <h1>Parent1 </h1>
            <Context> 
                <Child1/>
            </Context>
        </div>
    )
}
export default Parent1;