function Apple(){
    /*
    If you have a variable to send, and not a string as in 
    the example above, you just put the variable name 
    inside curly brackets:
    */

    const brandName = "Apple";
    return (
        <div>
            <MobilePhone brand = {brandName} />
        </div>
    );
}

function MobilePhone(props) {
    return (
        <div>
            <h1> I am, {props.brand} </h1>
        </div>
    );
}

export default Apple;