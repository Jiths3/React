import React, { useState } from 'react'


export default function List() {


    const [NewTask , SetNewTask] = useState("")
    const [Tasks , SetTasks] = useState([])




    function HandleInputChange(e){
        SetNewTask(e.target.value)
    }

    function AddNewTask(){

        if (NewTask.trim() !== "")

        {
        SetTasks(t => [...t, NewTask])
        SetNewTask("");
        } 

        
    }

    function DeleteTask(index){

        const updatedTasks = Tasks.filter((_,i) => i !== index)
        SetTasks(updatedTasks) 
 
    }

    return(<>


        <h1>To Do List</h1>
        <input type="text" id="ListInput" placeholder= "Enter tasks" onChange={() => HandleInputChange(event)} />
        <button onClick={AddNewTask}>Add Task</button>

        <ol>

            {Tasks.map((task,index) => 
            <li key={index}>
                {task}
            <button onClick={()=>DeleteTask(index)}>
                delete
            </button>

            </li>

         
        )}

        </ol>

                         


     </>);


}

