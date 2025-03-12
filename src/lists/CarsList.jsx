import React from 'react'

function Car(props) {
    return <li> I am a {props.brand} </li>
}
const CarsList = () => {
    const cars = ['Ford', 'BMW', 'Audi', 'mcLaren', 'Royal Royce', "Range Rover", "Porsche", "Lamborghini"];
  return (
    <div>
        <h1> Who lives in my garage. </h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
    </div>
  )
}

export default CarsList