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
        <div className={`main`}>
            <h1 className="page-title">{currentPage.name}</h1>

            <div className={currentPage.class}>
                { 
                    currentPage.id === 0 
                ? 
                    <About /> 
                :
                    currentPage.content.data.map((data) => {
                        return (
                            <div 
                            key={data.id} 
                            className={currentPage.content.class}
                            >
                                <h2>{data.title}</h2>
                                {data.img ? <img src={data.img} alt={data.alt} className="card-image image-border" /> : <></>}
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
}

export default Fun;