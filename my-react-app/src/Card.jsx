export default function Card(props){
    return(
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150"></img>     
            <h1>Jithin Russel {props.cardname}</h1>
            <p>I am currently doing my Bachelors and I play Video games too</p>
        </div>  
    );
} 