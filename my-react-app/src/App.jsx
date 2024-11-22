import Navbar from "./Navbar.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button.jsx";

export default function App() {
  const myname = 'Jithin'
  return (
        <>
        <h1>Hi I am {myname} </h1>
          <Navbar myname={myname} />
          <Food />
          <Card />
          <Card />
          <Card />
          <Card />
          <br />
          <br />
          <Button />


        </>  
  )
    
}

