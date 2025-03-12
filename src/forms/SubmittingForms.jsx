import React, { useState } from 'react'

const SubmittingForms = () => {
    const [name, setName] = useState("");
    console.log(name);

const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
}
  return (
    <form onSubmit={handleSubmit}>
        <h1> Submitting Forms </h1>
        <div>
            <input
            type = 'text'
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            placeholder = "Enter Your Name"
            />
        </div>
        <div>
            {/* <input type="submit"/> */}
            <button type="submit"> Submit </button>
        </div>
    </form>
  )
}

export default SubmittingForms;