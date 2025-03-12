import { use } from "react";
import { useRef } from "react";

const UncontrolledForms2 = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        console.log('Submitted: ', {username, password});
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label> Username: </label>
                <input 
                type="text"
                ref={usernameRef}
                placeholder="Enter Username"
                />
            </div>
            <div>
                <label> Password </label>
                <input 
                type="password"
                ref={passwordRef}
                placeholder="Enter Password"
                />
            </div>
            <button type="submit"> Submit </button>
        </form>
    )
}
export default UncontrolledForms2;