import Component3 from './Component3'

const Component2 = ({ user }) => {
  return (
    <div>
        <h1> I am Component 2 </h1>
        <Component3 user={user}/>
    </div>

  )
}

export default Component2;