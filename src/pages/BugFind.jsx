import React from 'react'

export default function Bugfind() {
    const [user, setUser] = React.useState({
        name : "rahul",
        age : 25,
    })

function updateAge(){
// This old approach mutates the existing state object. React may not detect
// the change because setUser receives the same object reference.
// user.age = 30;
// setUser(user);

// Create a new object instead, so React can detect the state change and re-render.
 setUser((user)=> ({
    ...user,
    age:30
 }) );
}

    return (  
    <>
     <button onClick={updateAge}>Update Age</button>
    <h1>{user.name}</h1>
    <h2>{user.age}</h2>
    </>
  )
}





