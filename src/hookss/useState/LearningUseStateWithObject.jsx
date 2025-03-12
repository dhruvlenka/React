import React, { useState } from 'react'

function LearningUseStateWithObject() {
   const [mobile, setMobile] = useState ({
        brand: "Apple",
        model: "iPhone 16 Pro",
        launchedYear: 2024,
        color: "Black Titanium",
        price: 114000
    });

    //updating the state
    const updateColor = (newColor, newPrice) => {
        //previousState: This represents the current state of mobile (before the update).
        setMobile(previousState => {
            //updating the state with spread operator
            return {...previousState, color:newColor, price: newPrice}
        });
    };

    
  return (
    <div>
        <h1> Mobile details </h1>
        <p> It is a {mobile.brand} {mobile.model} launched in {mobile.launchedYear} 
            , color: {mobile.color} with the price of {mobile.price}. </p>
                                       {/* passing the arguments */}
            <button onClick={() => updateColor("Desert Titanium", 116000)}> Desert Titanium </button>
            <button onClick={() => updateColor("White Titanium", 106000)}> White Titanium </button>
            <button onClick={() => updateColor("Natural Titanium", 110000)}> Natural Titanium </button>
 
    </div>
  )
}

export default LearningUseStateWithObject;