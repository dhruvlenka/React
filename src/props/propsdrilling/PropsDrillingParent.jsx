import PropsDrillingChil1 from "./PropsDrillingChild1";


const PropsDrillingParent = () => {
    let str = "Send me to nested child";

    let obj = {
        message: "Hello Child2",
    };

    let arr = [
        {
            id:1,
            text: "HTML",
        },
        {
            id:2,
            text: "CSS",
        },
        {
            id:3,
            text: "JavaScript",
        },
        {
            id:4,
            text: "React",
        }
    ]
    return (
        <div>
            <h1> Props Drilling Parent </h1>
            <PropsDrillingChil1 str={str} obj={obj} arr={arr}/>
        </div>
    )
}
export default PropsDrillingParent;