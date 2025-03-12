import Hoc from "./Hoc";

const Child2 = (x) => {
    console.log(x);
    
    return (
        <div>
            <h1>
                I am Child2
            </h1>
        </div>
    )
}
export default Hoc(Child2);