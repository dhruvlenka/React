import DBChild2 from "./DBChild2";
 
                //database destructuring
const DBChild1 = ({userMedia}) => {
    return (
        <div>
            <DBChild2 userMedia={userMedia}/>
        </div>
    );
};
export default DBChild1;