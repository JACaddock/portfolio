import Fun from "./routes/Fun";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { pages } from "./pages";
import { Routes, Route, Link, NavLink } from "react-router-dom";




const App = () => {
    function getButtons(classes) {
        return Object.keys(pages).map((page) => {
            return ( 
                    pages[page].enabled ? <NavLink key={pages[page].id} to={pages[page].link} className={classes}>{ pages[page].name }</NavLink>
                                        : null
                )
        })
    }

    return(
        <div className="app" id="dark">
            <Navbar buttons={getButtons("nav-btn")} />

            <Routes>
                <Route path={pages.about.link} element={<About content={pages.about.content} />} />
                <Route path={pages.projects.link} element={<Projects projects={pages.projects.content} />} />
                <Route path="/portfolio/fun" element={<Fun currentPage={pages.fun} />} /> 
                <Route
                    path="*"
                    element={
                        <main className="main not-found">
                            <h1 className="page-title gradient-text">404</h1>
                            <p>There's nothing here!</p>
                            <Link to="/portfolio" className="btn btn-ghost">Back home</Link>
                        </main>
                    }
                    />
            </Routes>
            
            <Footer buttons={getButtons("link")} />
            
        </div>
    );
}

export default App;