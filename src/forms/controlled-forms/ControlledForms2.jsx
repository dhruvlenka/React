import React, { useState } from 'react'

const ControlledForms2 = () => {
    let [formData, setFormData] = useState({
        useremail: "",
        userpassword: "",
    });

    let handleFormData = (e) => {
        let {name, value} = e.target;
       // console.log(value);
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
            <form onSubmit={formSubmit}>
                <label> Useremail : </label>
                <input
                type="email"
                value={formData.useremail}
                onChange={handleFormData}
                name="useremail"
                />
                <br></br>
                <br></br>

                <label> Password </label>
                <input type="password" 
                value={formData.userpassword}
                onChange={handleFormData}
                name="userpassword"
                />
                <br></br>
                <br></br>
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};
export default ControlledForms2;