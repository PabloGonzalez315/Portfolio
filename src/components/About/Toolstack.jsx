import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiVisualstudiocode, SiPostman, SiJirasoftware, SiFilezilla } from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" title="Linux">
                <SiLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Visual Studio Code">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Postman">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Filezilla">
                <SiFilezilla />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Jira">
                <SiJirasoftware />
            </Col>
        </Row>
    );
}

export default Toolstack;
