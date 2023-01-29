import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiHtml5,
    DiCss3,
    DiDjango,
    DiWordpress,
    DiSass,
    DiPhp,
} from "react-icons/di";
import { SiWoocommerce, SiFirebase } from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons" title="Html">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="CSS">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Javascript">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Reactjs">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="NodeJs">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="MondoDB">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Git">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Firebase">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Python">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Django">
                <DiDjango />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Sass">
                <DiSass />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Wordpress">
                <DiWordpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="Woocommerce">
                <SiWoocommerce />
            </Col>
            <Col xs={4} md={2} className="tech-icons" title="PHP">
                <DiPhp />
            </Col>
        </Row>
    );
}

export default Techstack;
