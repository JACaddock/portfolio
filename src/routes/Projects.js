import { useState } from "react";
import XSymbol from '../svg/x-symbol.svg';


const Projects = ({projects}) => {
    const [selected, setSelected] = useState(undefined);

    function select(project) {
        localStorage.setItem("selected", project.id);
        setSelected(project);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className="main">
            <header className="page-header">
                <span className="eyebrow">Work</span>
                <h1 className="page-title">Projects</h1>
                <p className="page-subtitle">A selection of things I've built. Pick one to find out more.</p>
            </header>

            {
                selected
                ?
                <section className="detail" key={selected.id}>
                    <button className="esc" aria-label="Close" onClick={() => {localStorage.removeItem("selected"); setSelected(undefined);}}>
                        <img src={XSymbol} alt="" />
                    </button>

                    {selected.img ? <div className="detail-media"><img src={selected.img} alt={selected.alt} /></div> : <></>}

                    <div className="detail-text">
                        <h2>{selected.title}</h2>
                        <p>{selected.desc}</p>

                        <ul className="tags">
                            {selected.tech.map((tech) => {
                                return <li key={tech} className="tag">{ tech }</li>
                            })}
                        </ul>

                        {selected.link ? <a className="btn btn-primary" target="_blank" rel="noreferrer" href={selected.link}>Visit project <span className="arrow">→</span></a> : <></>}
                    </div>
                </section>
                :
                <></>
            }

            {selected ? <h2 className="section-label">More projects</h2> : <></>}

            <div className="card-grid">
                { projects.map((project) => {
                        if (project !== selected && project.enabled) {
                            return (
                                <button
                                key={project.id}
                                className="card-item"
                                onClick={() => select(project)}
                                >
                                    {project.img ? <div className="card-thumb"><img src={project.img} alt={project.alt} /></div> : <></>}
                                    <div className="card-body">
                                        <h2>{project.title}</h2>
                                        <p className="card-desc">{project.desc}</p>
                                        <ul className="tags">
                                            {project.tech.map((tech) => <li key={tech} className="tag">{ tech }</li>)}
                                        </ul>
                                    </div>
                                </button>
                            )
                        } else {
                            return false
                        }
                    })
                }
            </div>
        </div>
    );
}

export default Projects;
