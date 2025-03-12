import React, { useState } from 'react'

const Select = () => {
    const [car, setCar] = useState("Volvo");
    const handleChange = (event) => {
        setCar(event.target.value)
    }

  return (
    <form>
        <h1> Select </h1>
        <select value={car} onChange={handleChange}>
            <option value="Ford"> Ford </option>
            <option value="Volvo"> Volvo </option>
            <option value="Fiat"> Fiat </option>
        </select>
    </form>
  )
}

export default Select;