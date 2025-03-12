import { useState } from "react";

const RegistrationFormNew = () => {
    const [formData, setFormData]= useState({
        email: '',
        password: ''
    });
    //errors state tracks validation errors.
    const [error, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData, [name]: value
        });
    };

    //validate checks for required fields and basic email/password rules.
    //Errors are displayed below each input if validation fails.
    const validate = () => {
        let tempErrors = {};
        if(!formData.email){
            tempErrors.email = 'Email is required.'
        } else if(!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';

        if(!formData.password) {
            tempErrors.password = 'Password is required.';
        } else if(formData.password.length<6){
            tempErrors.password = 'Password must be at least 6 characters long.';
            
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0; //returning true if no errors
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(validate()){
            console.log('Form Submitted: ', formData);
        } else {
            console.log('Validation Failed');
        }
    }
    return (
        <form>
            <div>
                <label> Email: </label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                />
                {error.email && <p style={{color:'red'}}>{error.email}</p>}
            </div>
            <div>
                 <label> Password: </label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                />

            </div>
            <button type="submit"> Register </button>
        </form>
    )
}
export default RegistrationFormNew;