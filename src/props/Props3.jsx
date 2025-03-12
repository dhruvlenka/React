function Mobile(props) {
    return (
        <div>
            <h1> I am, {props.brand.model} </h1>
        </div>
    )
}

function Company(){
   //an object:
    const mobileInfo = {name: "Apple", model: "iPhone15"};
    return (
        <div>
            <Mobile brand = {mobileInfo} />
        </div>
    );
}

export default Company;