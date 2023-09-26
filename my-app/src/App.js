import React from "react";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./component/Contact/Contact";
import "./App.css";
import CoursePage from "./component/Course/CoursePage";
import SwarVidhya from "./component/Course/SwarVidya";

function App() {
    return(
        <Router>
           <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/CoursePage">Courses Page</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
           <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/about" exact Component={About} />
            <Route path="/CoursePage" exact Component={CoursePage} />
            <Route path="/SwarVidhya" exact Component={SwarVidhya} />
            </Routes>
            
            </div>
        </Router>
        
    )

}
export default App;