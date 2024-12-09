import React, { useState } from 'react'


export default function List() {


    const[foods,setfoods] = useState(["orange", "apple", "pinepple"]) 

    function AddFood () {
        const newFood = document.getElementById("foodInput").value
        setfoods(f=> [...f , newFood])
        document.getElementById("foodInput").value = "" ;
    }

    function deleteFood (index) {
        setfoods(foods.filter((_,i) => i !== index ));
        
    }

    return(<>


        <h1>List of foods</h1>
        <ol> 
            {foods.map((food,index) => <li key={index} onclick={() => deleteFood(index)}>
            {food}
            </li>)}    
        </ol>
        <input type="text" id="foodInput" />
        <button onClick={AddFood}>add food</button>

                         


     </>);


}

