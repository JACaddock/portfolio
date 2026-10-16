const About = () => {
    return (
        <div>
            <p>This is my about page</p>
            <p>I talk about myself here</p>
        </div>
    )
}


const Fun = ({currentPage}) => {
    return (
        <div className="main">
            <header className="page-header">
                <span className="eyebrow">Fun</span>
                <h1 className="page-title">{currentPage.name}</h1>
            </header>

            <div className="card-grid">
                {
                    currentPage.id === 0
                ?
                    <About />
                :
                    currentPage.content.data.map((data) => {
                        return (
                            <figure key={data.id} className="gallery-item">
                                {data.img ? <img src={data.img} alt={data.alt} /> : <></>}
                                <figcaption>{data.title}</figcaption>
                            </figure>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Fun;
