const Footer = ({buttons}) => {
    return (
        <footer>
                <div className="h-box">
                    <small>James Caddock © 2022</small>
                </div>
                <div className="h-box col-gap-2">
                    <div className="v-box margin-b-0 row-gap-half">
                        <small className="sm-underline">Pages</small>
                        {buttons}
                    </div>
                    <div className="v-box margin-b-0 row-gap-half">
                        <small className="sm-underline">Social</small>
                        <small><a className="link" href="https://github.com/JACaddock" target="_blank" rel="noreferrer">Github</a></small>
                        <small><a className="link" href="https://www.linkedin.com/in/james-caddock/" target="_blank" rel="noreferrer">Linkedin</a></small>
                    </div>
                </div>
                
        </footer>
    );
}

export default Footer;