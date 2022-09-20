/*import Fun from "./routes/Fun";
import About from "./routes/About"*/
import Projects from "./routes/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { pages } from "./pages";
import { Routes, Route, Link } from "react-router-dom";




const App = () => {
    function getButtons(classes) {
        return Object.keys(pages).map((page) => {
            return ( 
                    pages[page].enabled ? <Link key={pages[page].id} to={pages[page].link} className={classes}>{ pages[page].name }</Link> : <button key={pages[page].id} className={classes} disabled>{ pages[page].name }</button>
                )
        })
    }

    return(
        <div className="app" id="light">
            <Navbar buttons={getButtons("nav-btn")} />

            <Routes>
                {/* <Route path="/portfolio" element={<About content={pages.about.content} />} /> */}
                <Route path="/portfolio" element={<Projects projects={pages.projects.content} />} />
                {/* <Route path="/portfolio/fun" element={<Fun currentPage={pages.fun} />} /> */}
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                    />
            </Routes>
            
            <Footer buttons={getButtons("link")} />
            
        </div>
    );
}

export default App;