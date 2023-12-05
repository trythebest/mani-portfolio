import React, { useRef } from "react";
import weather from "../pics/weather.png";
import expense from "../pics/expense.png";
import "./projects.css";
import { Col, Container, Image, Row } from "react-bootstrap";

export default function Projects() {
    const ref = useRef(null);

    let projects = [
        {
            id: "1",
            image: weather,
            link: "https://hmweatherapp.netlify.app",
            source: "https://github.com/trythebest/weather-app",
            name: "weather-app"
        },
        {
            id: "2",
            image: expense,
            link: "https://hmexpense-tracker.netlify.app",
            source: "https://github.com/trythebest/expense_tracker-frontend",
            name: "expense-app"

        },
        // {
        //     id: "3",
        //     image: expense,
        //     link: "https://hmexpense-tracker.netlify.app",
        //     source: "https://github.com/trythebest/expense_tracker-frontend",
        //     name: "expense-app"

        // }

    ]
   

    return (
        <div className=" project" id="Projects" ref={ref}>
            <div className=" p-2 body">
                <div className=" pb-2 heading">
                    <h3>Projects</h3>
                </div>
                <p className=" pb-5 content-details">Check out some of my work here</p>
                <div className="pro-details">
                    <Container>
                        <Row>
                            {projects.map(({ id, image, link, source, name }) => (
                                <Col xs={12} md={6} xl={6}>
                                    <div key={id} className="pro-cards">

                                        <img
                                            src={image}
                                            alt={name} 
                                            rounded
                                            className="img"
                                            
                                        />
                                        <div className="pro-details">
                                            <a href={link}  target="_blank" className="a">Link</a>
                                            <a href={source} target="_blank" className="a">Source Code</a>
                                        </div>
                                        <div className="buttons">
                                            <button>{name}</button>
                                        </div>
                                    </div>
                                </Col>



                            ))
                            }

                        </Row>
                    </Container>




                </div>
            </div>
        </div>

    )
}