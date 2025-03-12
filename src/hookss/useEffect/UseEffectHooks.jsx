import React from 'react'
import { useState, useEffect } from 'react'

const UseEffectHooks = () => {
    console.log('App Component Rendered')
     //variable, state updating function
    let[resourceType, setResourceType] = useState('Home'); // this is going to return a array
    useEffect(() => {
        console.log(resourceType);
    }, [resourceType]); 
    /*
    it takes two arguments, first argument: call back function(will not 
    re-executed because the value of the resource type did not changed)
    ,second argument: list of dependencies, call back function will be
    called whenever the dependency which we specify inside the array
    changes.

    if you make the array [] empty: first time the resource type will
     logged but when you change it state/button the component will be
      rendered but the resource type will not log

    we can specify multiple dependencies, separted by comma (,)
    */
    
  return (
    <div>
        <button onClick={() => {setResourceType('Home')}}> Home </button>
        <button onClick={() => {setResourceType('About')}}> About </button>
        <button onClick={() => {setResourceType('Contacts')}}> Contacts </button>
        <h3> {resourceType}  </h3>
        </div>
  )
}
export default UseEffectHooks;