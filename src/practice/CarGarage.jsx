function Car(props) {
    console.log(props);
    return(
        <div>
        <h1> I am "{props.brand}"</h1>
    </div>
    )
       
}

function CarGarage() {
    return (
        <div>
            <Car brand = "Porsche"/>
        </div>
    )
}

export default CarGarage;
