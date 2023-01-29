import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="nautilus">Pablo González </span>
                        from <span className="nautilus"> Córdoba, Argentina.</span>
                        <br />I am a web developer with a lot of passion for what I do and for learning more every day.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Watch science fiction series
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Travelling
                        </li>
                    </ul>

                    
               
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
