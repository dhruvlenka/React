const DBChild2 = ({users}) => {
    console.log(users); //key: users, value: array

    return (
        <div>
            {
                users.map((singleUser) => {
                    console.log(singleUser);


                    let {id, name, email, hobbies, profile:{age, gender, address: {city} }} = singleUser
                    // console.log(id)
                    // console.log(name)
                    // console.log(email)
                    // console.log(hobbies)
                    // console.log(age)
                    // console.log(gender)
                    // console.log(city)
                    return (
                        <section key={id}>
                            <h1> Name : {name} </h1>
                            <p> Email : {email} </p>
                            <p> Hobbies : {hobbies} </p>
                            <p> Profile : {age} </p>
                            <p> Gender : {gender} </p>
                            <p> City : {city} </p>

                            <ol>
                            {hobbies.map((ele, i) => {
                                    return <li key={i}> {ele} </li>
                                })}
                            </ol>

                        </section>
                    )

                })
            }
        </div>
    )
}
export default DBChild2;