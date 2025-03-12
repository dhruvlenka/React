import React from 'react'
import { useState } from 'react';

const HandlingForms = () => {
    const [deposit, setDepositAmount] = useState(0);
    console.log(deposit)

  return (
    <form>
        <h1> Handling Forms </h1>
        <input
        type='number'
        value={deposit} // Controlled input with state
        onChange={(e) => setDepositAmount(Number(e.target.value))} //Update state on change and convert the string to a number
        placeholder="Enter the Amount "
        />
        <button type="submit"> Deposit </button>
    </form>
  )
}

export default HandlingForms