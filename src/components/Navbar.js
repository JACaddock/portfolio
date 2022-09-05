import { Link } from "react-router-dom";

const Navbar = ({buttons}) => {
    return (
        <header className="nav">
            <Link to="/portfolio" className="nav-title cursor-pointer">James Caddock</Link>
            <ul className="nav-item">
                {buttons}
            </ul>
            
            <div className="nav-block"></div>
        </header>
    );
}


export default Navbar;