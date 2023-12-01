import React, { useRef } from "react";
import "./home.css";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LaunchIcon from '@mui/icons-material/Launch';
import { Button } from "@mui/material";
// import {  useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Link } from "react-scroll";
export default function Home(){
    const ref=useRef(null);
    const handleclick=()=>{
    ref.current?.scrollIntoView({behavior:"smooth"})
      
  }
    
    return(
       
        // <>
        // <Container className=" home" id="Home">
         <div className="p-2 mt-5 body">
            <h1 class="display-4" className="mt-5 pb-2">I'm a Full Stack Developer</h1>
            <p className="para">
                I have completed my MERN stack development course and having hands-on experience in web appilication from creating full stack projects and attend hackathons.
                <br/>
               Currently, I looking for a job from which i get trained technologies like React Js, Material ui, Node JS and MongoDB.
            </p>
            <div className="Project">
                    <Link to="Projects" offset={-100} className="button">Projects<KeyboardArrowRightIcon className="icon"/></Link>
                    <a href="mailto:manikandan.nagarajan.1998@gmail.com" target="_blank" className="button">Resume<LaunchIcon/></a>               
            </div>
            
            </div>          
      

        //  {/* </Container> */}
        // </>
        
    )
}