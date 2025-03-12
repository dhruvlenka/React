import React from "react";
import PropsChild from "./PropsChild";
import Users from "./Users";

const PropsParent = () => {
    let data = "Haryana"
    let user = {
        id:1, 
        name: "Dhruv",
   };

  let dbData = [
    {id:1, name:"john", sal:40000, designation: "Tester"},
    {id:2, name:"doe", sal:60000, designation: "Developer"},
    {id:3, name:"clark", sal:65000, designation: "Tester"},
    {id:4, name:"bruce", sal:70000, designation: "Developer"},
    {id:5, name:"tom", sal:75000, designation: "Tester"}
  ];

  return (
    <div>
      <h1>PropsParent</h1>
      <PropsChild data={data} user={user}/>

      <Users dbData = {dbData} />
    </div>
  );
};

export default PropsParent;
