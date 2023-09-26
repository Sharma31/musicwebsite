import React from "react";
import "./Header.css";


const Header = () => {
   
    return(
        <header>
           
         
            <nav>
            <ul >
             <div className="navbar">
                <a href="#home">Home</a>
                <a href="#courses">Courses</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
             </div>
            </ul>
           
            </nav>
           
        </header>

    )
}
export default Header;