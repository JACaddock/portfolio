const About = ({content}) => {
    return (
        <div className={`main`}>
            <h1 className="page-title">About me</h1>

            <div className="block bg-b">
                { content.map(about => { return ( <p key={about.id}>{about.text}</p> ) } ) }
                <img src="./img/Campaign_10.png" className="card-image" alt="Sunset" />
            </div>

            <div className="block">
                <img src="./img/imga.jpg" className="card-image" alt="Ferris wheel" />
                <p>Content for formatting</p>
            </div>
        </div>
    );
};

export default About;