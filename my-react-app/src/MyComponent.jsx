import React, { useState } from 'react'

function MyComponent() {
    
    const [name, setName] = useState("jithin")
    const [age, SetAge] = useState(0)
    const [isEmployed, SetisEmployed] = useState(false)


    const handleClick = () => 
        setName("changed")

    const handleClick2 = () =>
        SetAge(age + 1)

    const handleClick3 = () =>
        SetisEmployed(!isEmployed)

    

  return (
    <div>
        <p>hi i will be changing the state when button is pressed : {name} <br /> Age : {age} <br /> Employed: {isEmployed ? 'yes' : 'no'} </p>
        <button onClick={() => handleClick()}> press me </button>   
        <button onClick={() => handleClick2()}> press me tooo </button>
        <button onClick={() => handleClick3()}> press me threeee</button>   
   


           
    </div>

  )
}

export default MyComponent
