const DBChild2 = ({userMedia}) => {
    console.log(userMedia); //key: users, value: array

    return (
        <div>
            {
                userMedia.map((singleUser) => {
                    console.log(singleUser);


                    let {id, type, description, uploadedAt} = singleUser
                    console.log(id)
                    console.log(type)
                    console.log(description)
                    console.log(uploadedAt)
                    // console.log(age)
                    // console.log(gender)
                    // console.log(city)
                    // return (
                    //     Image()
                    // )

                    return (
                        <section>
                            <h1> Id: {id} </h1>
                        </section>
                    )

                })
            }
        </div>
    )
}
export default DBChild2;