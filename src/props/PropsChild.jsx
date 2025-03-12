import React from "react";

const PropsChild = (props) => {
    console.log(props); //{props: 'Hello world', user: {…}}
  
    let {data, user: {name}} = props; // destructuring props
    console.log(data);
    console.log(name);
  
    return (
      <div>
        <h1>PropsChild {props.data} </h1>
        <h1>
            Props data2 {name}
        </h1>
      </div>
    );
  };
  
  export default PropsChild;
  