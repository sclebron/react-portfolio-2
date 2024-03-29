import React from 'react';
import "./projects.css";
import Particles from './particles.jsx';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import zorkForDogs from './images/zorkForDogs.png';
import fairFare from './images/fairFare.png';
import employeeTracker from './images/employeeTracker.png';
import profile from './images/profile.png';
import denver from './images/denver.png';
import todo from './images/todo.png';

function Project() {
    const projects = [
        {
        title: "Fair Fare",
        img: fairFare,
        description: "A restaurant review site that allows you to review individual dishes.",
        technologies: "JavaScript, MySQL, Express Handlebars",
        button: "Watch Demo",
        link: "https://drive.google.com/file/d/1OBknxErYsa4NeJtO_YZFQZu1aCZ2LnW2/view",
        },
        {
        title: "What To Do In Denver",
        img: denver,
        description: "A website to help you pick activities to do in and around Denver, CO!",
        technologies: "React, JavaScript",
        button: "Visit Site",
        link: "https://sclebron.github.io/what-to-do-in-denver/",
        },
        {
        title: "Zork for Dogs",
        img: zorkForDogs,
        description: "A text adventure game inspired by my dog, Peanut!",
        technologies: "JavaScript, jQuery",
        button: "Visit Site",
        link: "https://sclebron.github.io/zork-for-dogs/",
        },
        {
        title: "Employee Tracker",
        img: employeeTracker,
        description: "A command line application for tracking and adding employees.",
        technologies: "Node.js, Inquirer, MySQL",
        button: "Watch Demo",
        link: "https://drive.google.com/file/d/1WuRLfl9s8N_UCaedx0487WIIEZAjlplt/view",
        },
        {
        title: "Team Profile Generator",
        img: profile,
        description: "A command line application that creates an HTML page displaying team members.",
        technologies: "Node.js, Inquirer",
        button: "Watch Demo",
        link: "https://drive.google.com/file/d/19T7df7bgN-fr1euWY-5yfWXA7tfmdHGU/view",
        },
        {
        title: "To Do List",
        img: todo,
        description: "A site that allows you to add, check, and delete items on your to do list.",
        technologies: "TypeScript",
        button: "Visit Site",
        link: "https://sclebron.github.io/typescript-todo/",
        }
    ]

    return (
        <div className="projectsContainer">
            <Particles />
            <div className="title">Projects</div>
            <Container className="projectCards">
                <Row className="row">
                {projects.map((projects) => (
                    <Col className="column">
                        <Card className="card">
                            <Card.Body>
                                <Card.Title className="cardTitle">{projects.title}</Card.Title>
                                <Card.Img className="cardImg" src={projects.img} />
                                <Card.Text className="cardDescription">{projects.description} <br /> {projects.technologies}</Card.Text>
                                <a className="linkBtn" href={projects.link} target="_blank">{projects.button}</a>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Project;