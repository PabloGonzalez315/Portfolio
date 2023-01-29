import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="nautilus"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I am a self-taught individual who started my career in the world of freelance work. Up to
                            date I have <b className="nautilus">7 years of experience with WordPress and WooCommerce</b>{" "}
                            . During this time, I have worked on a wide variety of projects, from small personal
                            websites to large online stores. I have learned to master the tools and plugins necessary to
                            develop an attractive and user-friendly website, as well as to customize themes and adapt
                            the design to the specific needs of each project.
                            <br />
                            <br />
                            <p>
                                However, over time, I began to feel that I needed a greater challenge and decided to
                                delve into custom programming. I wanted to learn how to create custom solutions that fit
                                the unique needs of each client. This allowed me to develop more advanced programming
                                skills and gave me the opportunity to work on even more exciting projects.
                            </p>
                            In addition, I am a<b className="nautilus"> Linux environment user </b>, which allows me to
                            work efficiently and securely on my projects. I like to work with the latest technologies
                            and tools, and the use of Linux allows me to stay updated with the latest trends in
                            programming.
                            <br />
                            <br />
                            In summary, I am a person passionate about web development and technology. I love learning
                            new skills and I enjoy working on challenging projects.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="nautilus">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/PabloGonzalez315"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/capitangocho"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/pablogonzalez315/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="httpshttps://www.instagram.com/capitangocho"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
