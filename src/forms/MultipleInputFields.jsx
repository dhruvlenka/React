import React, { useState } from 'react'


const MultipleInputFields = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

  return (
    <form onSubmit={handleSubmit}>
        <label> Enter your name: </label>
        <input
        type="text"
        name="username"
        value={inputs.username || ""}
        onChange={handleChange}
        />
        <label> Enter your age: </label>
        <input
        type="text"
        name="age"
        value={inputs.age || ""}
        onChange={handleChange}
        />
        <label> 
            <input
            type="submit"
            />
        </label>
    </form>
  )
}

export default MultipleInputFields