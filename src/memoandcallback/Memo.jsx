import React, { useState, useMemo, useCallback} from 'react'
import Child from './Child';

const Memo = () => {
    let [count, setCount] = useState(0);
    let [add, setAdd] = useState(0);
    let [minus, setMinus] = useState(100);

    let memorizeVal = useMemo(() => {
        console.log("multiple func")
        return add * 10;
    }, [add]);

    // function multiply(){
    //     console.log("multiple func")
    //     return add * 10;
    // }

    let memorizedFunc = useCallback(() => {
        console.log("I am data func.")
    },[]);

    // function data() {
    //     console.log("I am data func.")
    // }

    return(
       <div>
        <h1> Memo and Callback</h1>
        <h2> Counter {count} </h2>
        <button onClick={() => setCount(count+1)}> Increment </button>

        <h1> Add {add} </h1>
        <button onClick={() => setAdd(add+1)}> Add </button>

        <h1> Minus {minus} </h1>
        <button onClick={() => setMinus(minus-1)}> Minus </button>

        <h1> Multiplication {memorizeVal} </h1>

        <Child prop={memorizedFunc}/>
       </div>
    )
}
export default Memo;