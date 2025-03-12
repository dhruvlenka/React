
//Parent Component
function Greet2() {
    return (
        <div>
            <PropsGreeting name = "Dhruv" />
        </div>
    )
}

//Child Component, ({name}): destructuring props
function PropsGreeting({name}){
    return (
        <div>
            <h1> Hello, {name} </h1>
        </div>
    )
}

export default Greet2;