export default function Button(){

    let count = 0
    const handleClick = (e) => e.target.textContent = "Ouch";     
    const handleDoubleClick = (e) => e.target.textContent = "Ouchhhhhh";

    return(

        <button onClick ={(e) => handleClick(e)} onDoubleClick={(e) => handleDoubleClick(e)}>Click me </button>

    );

} 