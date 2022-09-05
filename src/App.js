import Fun from "./routes/Fun";
import About from "./routes/About"
import Projects from "./routes/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { pages } from "./pages";
import { Routes, Route } from "react-router-dom";




const App = () => {
    return(
        <div className="app" id="light">
            <Navbar pages={Object.keys(pages).map(page => {return {name: pages[page].name, id: pages[page].id, link: pages[page].link, enabled: pages[page].enabled}})} />

            <Routes>
                <Route path="/" element={<About content={pages.about.content} />} />
                <Route path="projects" element={<Projects projects={pages.projects.content} />} />
                <Route path="fun" element={<Fun currentPage={pages.fun} />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                        </main>
                    }
                    />
            </Routes>
            
            <Footer />
            
        </div>
    );
}

export default App;