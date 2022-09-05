import { Link } from "react-router-dom";

const Navbar = ({onClickPage, pages}) => {
    const buttons = pages.map((page) => {
            return ( 
                    //<li key={page.id} className="nav-btn" onClick={() => onClickPage(page)}>{ page.name }</li>
                    page.enabled ? <Link key={page.id} to={page.link} className="nav-btn">{ page.name }</Link> : <button key={page.id} className="nav-btn" disabled>{ page.name }</button>
                )
        })
    

    return (
        <header className="nav">
            <Link to="/" className="nav-title cursor-pointer">James Caddock</Link>
            <ul className="nav-item">
                {buttons}
            </ul>
            
            <div className="nav-block"></div>
        </header>
    );
}


export default Navbar;