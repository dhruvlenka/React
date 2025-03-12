import Child1 from "./Child1";

//avoiding prop drilling
const Parent = () => {
    return (
        <div>
            <h1> I am Parent.</h1>
            <Child1/>
        </div>
    )
}
export default Parent;