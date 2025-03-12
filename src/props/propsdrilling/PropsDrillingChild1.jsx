import PropsDrillingChild2 from "./PropsDrillingChild2"

const PropsDrillingChild1 = ({str, obj, arr}) => {
    console.log(str, obj, arr);
    return (
        <div>
            <h1> Props Drilling Child1 </h1>
            <PropsDrillingChild2 str={str} obj={obj} arr={arr}/>
        </div>
    )
}
export default PropsDrillingChild1;