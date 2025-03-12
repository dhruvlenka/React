//Parent Component
function Greet() {
    return (
        <div>
            <PropsGreeting name = "Dhruv" />
        </div>
    )
}

//Child Component
function PropsGreeting(props){
    return (
        <div>
            <h1> Hello, {props.name} </h1>
        </div>
    )
}

export default Greet;