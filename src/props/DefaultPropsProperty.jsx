const Character = ({name}) => {
    return <h1> Hello, {name} </h1>
}

Character.defaultProps = {
    name: "Jack Sparrow"
}
export default Character;