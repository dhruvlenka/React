import React, { useState } from 'react'

const ControlledForms2 = () => {
    let [formData, setFormData] = useState({
        userName: "",
        userAge: "",
        userDesignation: ""

    });

    let handleFormData = (event) => {
        let {name, value} = event.target;
       // console.log(valb e);
      // console.log({name: value});
        setFormData({ ...formData, [name]: value }); //setting the form
    };

    let formSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div>
            <h1> Controlled Forms - optimal way</h1>
            <form onSubmit={formSubmit.userName}>
                <label> Name : </label>
                <input
                type="name"
                value={formData}
                onChange={handleFormData}
                name="userName"
                />
                <br></br>
                <br></br>

                <label> Age </label>
                <input type="number" 
                value={formData.userAge}
                onChange={handleFormData}
                name="userAge"
                />
                <br></br>
                <br></br>

                <label> Designation </label>
                <input type="name" 
                value={formData.userDesignation}
                onChange={handleFormData}
                name="userDesignation"
                />
                <br></br>
                <br></br>

                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};
export default ControlledForms2;