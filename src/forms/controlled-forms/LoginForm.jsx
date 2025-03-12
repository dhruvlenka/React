import React, { useState } from 'react'

//Controlled Form
const LoginForm= () => {
    //state to hold form data
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    //handling input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            //dynamically updating the filed based on name
            ...formData, [name]: value
        });
    };

    //handling form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted: ', formData);

    }
  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label> Username: </label>
            <input type="text"
                   name="username"
                   value={formData.username}
                   onChange={handleChange}
                   placeholder="Enter username"
            />
            </div>  

            <div>
                <label> Password: </label>
                <input  
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                />
            </div>
            <button type="submit"> Login </button>
    </form>
  )
}

export default LoginForm;