// import Navbar from "./Navbar.jsx";
// import Food from "./Food.jsx";
// import Card from "./Card.jsx";
// import Button from "./Button.jsx";
import List from "./List.jsx"
import { useState } from "react";

export default function App() {

  const fruits = [{name:"apple" , calories:98 },
    {name:"orange" , calories:32},
    {name:"mango" , calories:21},
    {name:"pineapple" , calories:31}];

  const Vegetables = [{name:"ladiesfinger" , calories:18 },
    {name:"tomato" , calories:312},
    {name:"carrot" , calories:51},
    {name:"beetroot" , calories:16}];  

return(

  <>
      <List items = {fruits} />
      <List items = {Vegetables} />

  
  </>

);





















  // const myname = 'Jithin'

  // const [count , Countinc] = useState(0)


  // const addCount=()=> {
  //   Countinc(count + 1)
  //   console.log(count)
  // }


  // return (

  //       <>
  //       <button onClick={addCount}>click me</button>
  //       <h1>Counter: {count} </h1>
       
       
       
  //      {/* <h1>Hi I am {myname} </h1>
  //         <Navbar myname={myname} />
  //         <Food name = "chicken curry"/>
  //         <Card cardname = "good flashcard" />
  //         <Card />
  //         <Card />
  //         <Card />
  //         <br />
  //         <br />
  //         <Button /> */}

  //       </>  
  // )
    
}

