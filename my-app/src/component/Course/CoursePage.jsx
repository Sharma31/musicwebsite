import React, { useState  } from "react";
import Button from "../../Button";
import SwarVidhya from "../Course/SwarVidya"
import "./CoursePage.css"

const CoursePage = () => {
    const [currentSection, setCurrentSection] = useState(1);

    
 return (
   <div className="coursepagebg">
      <img src='./images/coursepagebg.png' alt='' />
   
    <div className="coursename">
   <h1>Courses Available</h1>

        {/* Render navigation buttons */}
        <a href="SwarVidhya">Swar Vidhya</a>
        
    </div>
    </div>
 )
 }

 export default CoursePage;

