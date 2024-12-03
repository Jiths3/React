import React, {useState} from 'react'

function ColorPicker() {

    const [color , setColor] = useState("#0000FF")

    const handleChange = (e) => setColor(e.target.value) 



  return (
    <div>
        <div>
            <p style={{backgroundColor: color}}>This is the line where the colour will be changing</p>
            <label> pick a color of your own choice:</label>
            <input type="color" value={color} onChange={handleChange} />
        </div>
      
    </div>
  )
}

export default ColorPicker
    