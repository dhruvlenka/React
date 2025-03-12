function Car(props) {
    return (
        <div>
            <h2>I am, "{ props.brand }"!</h2>
        </div>
    )
  }
  
  //Sending the "brand" property from the Garage component to the Car component:
  function Garage2() {
    return (
        <div>
            <h1>Who lives in my garage?</h1>
            <Car brand="Audi" />
        </div>
    );
  }
export default Garage2;

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage />);
