import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import luda from "../../assets/Projects/luda.png";
import pokedex from "../../assets/Projects/pokedex.png";
import tienda from "../../assets/Projects/tienda.png";
import clubmum from "../../assets/Projects/clubmum.png";
import granja from "../../assets/Projects/granja.png";
import pewen from "../../assets/Projects/pewen.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="nautilus">Works / Personal Projects </strong>
                </h1>
                <p style={{ color: "white" }}>Here are some projects in which I have developed.</p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={clubmum}
                            isBlog={false}
                            title="ClubMum"
                            description="Website of online courses on crafts made in wordpress refactoring of the complete site with modifications in store and subscriptions according to geolocation"
                            // ghLink=""
                            demoLink="https://clubmum.com.ar"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pewen}
                            isBlog={false}
                            title="Pewen"
                            description="Multisite targeting website, construction of pages linked by survey and custom quote modification in front"
                            // ghLink=""
                            demoLink="https://pewenpisos.com.ar"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={tienda}
                            isBlog={false}
                            title="Online store"
                            description="Online shoe store with api connection to payment gateway in javascript"
                            ghLink="https://github.com/PabloGonzalez315/Editor.io"
                            demoLink="https://pablogonzalez315.github.io/ecommerceJsCoder/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={luda}
                            isBlog={false}
                            title="Luda"
                            description="Website of toys for children with special requirements"
                            ghLink="https://github.com/PabloGonzalez315/luda"
                            demoLink="https://pablogonzalez315.github.io/luda/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={granja}
                            isBlog={false}
                            title="Corven"
                            description="Family business dedicated to the industrialization and sale of poultry products"
                            ghLink="https://github.com/PabloGonzalez315/AvicolaGonzalez"
                            demoLink="https://pablogonzalez315.github.io/AvicolaGonzalez/"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={pokedex}
                            isBlog={false}
                            title="Pokedex"
                            description="Pokedex website, CRUD in python with django framework"
                            ghLink="https://github.com/PabloGonzalez315/PokedexPython"
                            demoLink="https://www.youtube.com/watch?v=mfQaMoXBKiA"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
