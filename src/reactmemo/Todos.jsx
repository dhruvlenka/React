
const Todos = ({todos}) => {
    console.log("Child Rendered");

    let result = 0;
    for(let i=0; i<1000000; i++){
        result += i;
    }
    return (
        <div>
            <h2> {todos} </h2>
            <p> Computed Value: {result} </p>
        </div>
    );
};

export default Todos;