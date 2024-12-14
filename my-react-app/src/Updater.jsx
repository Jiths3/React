import React, {useState, useEffect} from 'react'

function Updater() {

    const [count , setCount] = useState(0);

    useEffect(()=>{
        document.title = `Count ${count}`
    });

    function AddCount(){
        setCount(c=> c+1);
    } 
    
    




  return (
    <div>

        
        <p>    
            Count: {count}
        </p>
        <button onClick={AddCount}>Add</button>



      
    </div>
  )
}

export default Updater
