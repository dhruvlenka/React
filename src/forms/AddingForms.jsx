import React from 'react'

const AddingForms = () => {
  return (
    <form>
        <h1> Personal Information</h1>
        <div>
            <input
            type='text'
            placeholder="Enter Your Name: "
            ></input>
        </div>
        <div>
            <input
            type='date'
            placeholder="Enter Age"
            >
            </input>
        </div>
        <div>
            <input
            type='email'
            placeholder="Enter Email Address"
            >
            </input>
        </div>
        <div>
            <input
            type='tel'
            placeholder="Enter Mobile"
            >
            </input>
        </div>
        <div>
            <input
            type='text'
            placeholder="Enter Address"
            >
            </input>
        </div>
        <button type="submit"> Submit </button>
    </form>
  )
}

export default AddingForms;