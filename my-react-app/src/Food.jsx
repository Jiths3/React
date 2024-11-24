export default function Food(props){

    const fruit1 = "Apple"
    const fruit2 = "Mango"
    
    return(
        <ul>
            <li>orange {props.name}</li>
            <li>{fruit1}</li>
            <li>{fruit2}</li>
        </ul>

    );
}