import React from "react";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
    return (
        <Router>
            <Header />
            <Home />
        </Router>
    )
}
export default App;