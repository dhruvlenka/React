const Users = (dbData) => {
    console.log(dbData);

    return (
        <div>
            <h1> Users </h1>
            {dbData.map(({id, ename, sal, designation }) => {
                return (
                    <div>
                        <h1> Username : </h1>
                        <p> Salary : {sal} </p>
                        <p> Designation : {designation} </p>
                        </div>
                );
            })};
        </div>
    );
};
export default Users;