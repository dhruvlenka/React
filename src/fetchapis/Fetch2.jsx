import { useState } from "react";
import React from "react";

const Fetch2 = () => {
    let [allUsers, setAllUsers] = useState([])

    async function getAllUsers() {
        console.log("getAllUsers function called");

        let resp = await fetch("https://fakestoreapi.com/products");
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
                let {id, title, description, category, image} = ele;
                return (
                    <section key={id}>
                        <img src={image} height={200} width={200} alt=""/>
                        <h3> ID: {id}</h3>
                        <h4> Title: {title}</h4>
                        <p> Description {description} </p>
                        <h5> Category {category} </h5>
                    </section>
                )
            })}
        </div>
    )
}
export default Fetch2;