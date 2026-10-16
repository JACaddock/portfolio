const Footer = ({buttons}) => {
    return (
        <footer>
            <div className="container footer-inner">
                <div className="footer-brand">
                    <span className="nav-title">
                        <span className="nav-logo" aria-hidden="true">JC</span>
                        James Caddock
                    </span>
                    <p>© {new Date().getFullYear()} James Caddock</p>
                </div>
                <div className="footer-cols">
                    <div className="footer-col">
                        <span className="footer-heading">Pages</span>
                        {buttons}
                    </div>
                    <div className="footer-col">
                        <span className="footer-heading">Social</span>
                        <a className="link" href="https://github.com/JACaddock" target="_blank" rel="noreferrer">GitHub</a>
                        <a className="link" href="https://www.linkedin.com/in/james-caddock/" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
