import { useState } from "react";

const ControlledForms = () => {
    //states
    let [username, setUsername] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState(""); 

    //will change the state
    function handleUsername(e){
        setUsername(e.target.value);
    }
    function handleEmail(e) {
        setEmail(e.target.value);
    }
    function handlePasswors(e) {
        setPassword(e.target.value);
    }

    function formSubmit(e) {
        e.preventDefault(); //preventing to being default 
        console.log({username,email,password});
        setUsername("")
        setEmail("")
        setPassword("")

    }

    return (
        <div>
            <h1> I am Controlled Forms. </h1>
            <form> 
                <label> username </label>
                <input type="text" value={username} onChange={handleUsername}/>
                <br />
                <br />
                <label> Email </label>
                <input type="text" value={email} onChange={handleEmail}/>
                <br />
                <br />
                <label> Password </label>
                <input type="text" value={password} onChange={handlePasswors}/>
                <br />
                <br />
                <button type="submit" onClick={formSubmit}> Submit </button>
            </form>
        </div>
    )
}
export default ControlledForms;