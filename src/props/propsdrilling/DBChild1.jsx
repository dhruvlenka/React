import DBChild2 from "./DBChild2";
 
                //database destructuring
const DBChild1 = ({users}) => {
    return (
        <div>
            <DBChild2 users={users}/>
        </div>
    );
};
export default DBChild1;