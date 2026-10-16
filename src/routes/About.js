import { Link } from "react-router-dom";
//import imga from "../img/imga.jpg";
import profile from "../img/profilepic.png";

const About = ({content}) => {
    return (
        <div className="main">
            <section className="hero">
                <div className="profile-wrap">
                    <img src={profile} className="profile" alt="James Caddock" />
                </div>
                <div>
                    <span className="eyebrow">Software Developer</span>
                    <h1 className="hero-title">Hi, I'm <span className="gradient-text">James Caddock</span></h1>
                    <p className="hero-sub">Strong interest in Front-End Development geared towards technologies like React.</p>
                    <div className="hero-actions">
                        <Link to="/portfolio/projects" className="btn btn-primary">View projects <span className="arrow">→</span></Link>
                        <a href="https://github.com/JACaddock" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
                    </div>
                </div>
            </section>
            
            {/*
            <section className="feature">
                <div className="feature-media">
                    <img src={imga} alt="Ferris wheel" />
                </div>
                <div className="feature-text">
                    <h2>Content for formatting</h2>
                    <p>Content for formatting</p>
                </div>
            </section>

            <section className="feature feature-reverse">
                <div className="feature-media">
                    <img src={imga} alt="Ferris wheel" />
                </div>
                <div className="feature-text">
                    <h2>Content for formatting</h2>
                    <p>Content for formatting</p>
                </div>
            </section>
            */}

        </div>
    );
};

export default About;
