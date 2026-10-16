import { Link } from "react-router-dom";

const Navbar = ({buttons}) => {
    return (
        <header className="nav">
            <div className="container nav-inner">
                <Link to="/portfolio" className="nav-title">
                    <span className="nav-logo" aria-hidden="true">JC</span>
                    <span className="nav-name">James Caddock</span>
                </Link>
                <nav className="nav-item">
                    {buttons}
                </nav>
            </div>
        </header>
    );
}


export default Navbar;
