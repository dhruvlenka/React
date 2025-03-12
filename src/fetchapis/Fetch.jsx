import { useState } from "react";
import React from "react";

const Fetch = () => {
    let [allUsers, setAllUsers] = useState([])

    async function getAllUsers() {
        console.log("getAllUsers function called");

        let resp = await fetch("https://api.github.com/users");
        let data = await resp.json();

        console.log(data);
        setAllUsers(data);
    }
    return (
        <div>
            <h1> Fetch APIs</h1>
            <button onClick={getAllUsers}>Fetch All User</button>
            {/* fetching the data from api */}
            {allUsers.map((ele)=> {
                let {id,login,avatar_url, type} = ele;
                return (
                    <section key={id}>
                        <img src={avatar_url} height={200} width={200} alt=""/>
                        <h1> Username {login}</h1>
                        <h2> Type: {type} </h2>
                    </section>
                )
            })}
        </div>
    )
}
export default Fetch;