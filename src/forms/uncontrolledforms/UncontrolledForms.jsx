import { useRef } from "react";

const UncontrolledForms = () => {
    let usernameRef = useRef();
    let emailRef = useRef();
    let passwordRef = useRef()

    function formSubmit(e) {
        e.preventDetails();
        console.log("Form Submitted");
        console.log(usernameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

        // let userData = {
        //     username: usernameRef.current.value,
        //     email: emailRef.current.value,
        //     password: passwordRef.current.value
        // };
    }

    return (
        <div>
            <h1> I am Uncontrolled Forms</h1>
            <form onSubmit={formSubmit}>
                <label> Username </label>
                <input type="text" ref={usernameRef} />
                <br/>
                <br/>

                <label> Email </label>
                <input type="email" ref={emailRef} />
                <br/>
                <br/>

                <label> Password </label>
                <input type="password" ref={passwordRef} />
                <br/>
                <br/>
                <button> Submit </button>
            </form>
        </div>
    )
}
export default UncontrolledForms;
