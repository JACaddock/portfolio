import { useState } from "react";
import XSymbol from '../svg/x-symbol.svg';


const Projects = ({projects}) => {
    const [selected, setSelected] = useState(undefined);

    return (
        <div className={`main`}>
            <h1 className="page-title">Projects</h1>

            {
                selected
                ? 
                <div className="v-box box transition-in">
                    <div className="h-box justify-between">
                        <div className="esc-block"></div>
                        <h2>{selected.title}</h2>
                        <img src={XSymbol} alt="an X" className="esc" onClick={() => {localStorage.removeItem("selected"); setSelected(undefined);}} />
                    </div>
                    
                    <div className="h-box box-content">
                        
                        <div className="box-block">{selected.img ? <img src={selected.img} alt={selected.alt} className="card-image justify-center image-border" height={300} /> : <></>}</div>
                        <div className="v-box box-text justify-between">
                            <p className="desc">{selected.desc}</p>

                            <ul>
                                {selected.tech.map((tech) => {
                                return <li key={tech}>{ tech }</li>
                                })}
                            </ul>

                            {selected.link ? <a className="box-link nav-btn" target="_blank" rel="noreferrer" href={selected.link}>{ selected.link }</a> : <></>}
                        </div>
                    </div>           
                    
                </div> 
                : 
                <></>
            }

            <div className="card h-card">
                { projects.map((project) => { 
                        if (project !== selected ) {
                            return (
                                <div 
                                key={project.id} 
                                className="card-item" 
                                onClick={() => {localStorage.setItem("selected", project.id); setSelected(project); document.body.scrollTop = 0; document.documentElement.scrollTop = 0;}}
                                >
                                    <h2>{project.title}</h2>
                                    {project.img ? <img src={project.img} alt={project.alt} width="300px" height="400px" className="card-image image-border" /> : <></>}
                                </div>

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