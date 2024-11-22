export default function Navbar(props){

    return <nav className="navbar">
            <ul>
                <li><a href="">Home {props.myname}</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Sign In</a></li>
                <li><a href="">Sign Up</a></li>
            </ul>
        </nav>

}