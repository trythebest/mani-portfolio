import React, { useRef } from "react";
import "./home.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LaunchIcon from '@mui/icons-material/Launch';
// import {  useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
export default function Home(){
    const ref=useRef(null);
    const handleclick=()=>{
    ref.current?.scrollIntoView({behavior:"smooth"})
      
  }
    
    return(
       
        // <>
        // <Container className=" home" id="Home">
         <div className="p-2 mt-5 body" id="Home">
            <h1 class="display-4" className="mt-5 pb-2">I'm a Front-end Developer</h1>
            <p className="para">
                I have completed my MERN stack development course and having hands-on experience in web appilication from creating front-end projects and attend hackathons.
                <br/>
               Currently, I looking for a job from which i get trained technologies like Javascript, React Js, Material ui, Bootstrap, Html and Css.
            </p>
            <div className="Project">
                    <Link to="Projects" offset={-100} className="button">Projects<KeyboardArrowRightIcon className="icon"/></Link>
                    <a href= "https://drive.google.com/file/d/17luKTlc5v9XQPlkF3wN1_OCg6lAEVkSq/view?usp=sharing" target="_blank" rel="noreferrer" className="button">Resume<LaunchIcon/></a>               
            </div>
            
            </div>          
      

        //  {/* </Container> */}
        // </>
        
    )
}