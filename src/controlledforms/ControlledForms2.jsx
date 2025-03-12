import { useState } from "react";

const ControlledForms2 = () => {
    let [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        let {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    function formSubmit(e){
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <h1> Controlled Forms 2 </h1>
            <form onSubmit={formSubmit}>
                <label> Email </label>
                <input 
                type = "text"
                value = {formData.email}
                onChange = {handleChange}
                name = "email"
                />
                <br/>
                <label> Password </label>
                <input 
                type = "text"
                value = {formData.password}
                onChange = {handleChange}
                name = "password"
                />

            </form>
        </div>
    )
}
export default ControlledForms2;