//functions
function Car() {
    return (
        <div>
            <h2> I am Audi A7, the latest version of Audi. </h2>
        </div>
    )
}

//arrow functions
const Garage = () => {
    return (
        <div>
            <h2>My Audi is parked in the garage.</h2>
            <Car/>
        </div>
    );
}
export default Garage;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
