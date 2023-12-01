import React from "react";
import "./skills.css";
import HTML from "../pics/HTML.png";
import CSS from "../pics/CSS.png";
import JS from "../pics/JS.png";
import REACT from "../pics/REACT.png";
import NODE from "../pics/NODE.png";
import EXPRESS from "../pics/EXPRESS.png";
import MONGODB from "../pics/MONGODB.png";
import GITHUB from "../pics/GITHUB.png";
import { Col, Container, Row } from "react-bootstrap";

export default function Skills() {
    let skills = [
        {
            id: "1",
            image: HTML,
            name: "HTML",
            boxshadow: "-1px 3px 6px  #fc7f2b "  


        },
        {
            id: "2",
            image: CSS,
            name: "CSS",
            boxshadow: "-1px 3px 6px #5f9bfc"

        },
        {
            id: "3",
            image: JS,
            name: "JAVASCRIPT",
            boxshadow: "-1px 3px 6px #f8c212"  

        },
        {
            id: "4",
            image: REACT,
            name: "REACT",
            boxshadow: "-1px 3px 6px  #3461c4"
        },
        {
            id: "5",
            image: NODE,
            name: "Node Js",
            boxshadow: "-1px 3px 6px  #38A962"   

        },
        {
            id: "6",
            image: EXPRESS,
            name: "EXPRESS",
            boxshadow: "-1px 3px 6px  #989fac"  

        },
        {
            id: "7",
            image: MONGODB,
            name: "Mongo DB",
            boxshadow: "-1px 3px 6px  #38A962"  

        },
        {
            id: "8",
            image: GITHUB,
            name: "GITHUB",
            boxshadow: "-1px 3px 6px  #989fac"  
        }


    ]

    let sty = {
        height: "100px",
        width: "100px"
    }
   
    return (
        
        <div className=" mx-auto  p-2 skills" id="skills">
            <div className="skill-details">
                <div className="  pb-2 heading">
                    <h3>Skills</h3>   
                </div>
                <div>
                    <p className=" pb-5 content-details">These are the technologies i've worked with...</p>
                </div>
                
                <Container>
                    <Row>
                        {skills.map(({ id, image, name, boxshadow }) =>
                            <Col xs={12} md={6} xl={4} key={id}>
                                <div className="skill-card" style={{boxShadow:boxshadow}} >
                                    <div className="box-shadow" >
                                        <img src={image} alt={name} style={sty} />
                                    </div>

                                    <div className="skill-name">
                                        <p >{name}</p>

                                    </div>
                                </div>

                            </Col>


                        )}

                    </Row>
                    </Container>


            </div>

        </div>
    )
}


// style={{boxShadow: style}}