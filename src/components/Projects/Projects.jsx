import React from "react";
import { styled } from "styled-components";
import SliderComp from "./SliderComp";
import {Zoom} from "react-awesome-reveal"

const Projects = () => {
  return <Container id="projects">
    <Zoom>
    <h1>Recent <span className="green">Projects</span></h1>
    <p>In my projects, I've tackled various challenges and learned immensely from hands-on experience. I've honed skills in coding, problem-solving, and collaborating with teams. These projects reflect my ability to turn ideas into functional solutions and my dedication to continuous learning. I'm excited to contribute my skills and enthusiasm to future projects that push the boundaries of innovation.</p>
    </Zoom>
    <Slide>
        <SliderComp/>
    </Slide>
  </Container>
};

export default Projects;
const Container = styled.div`
   
    width:80%;
    max-width:1280px;
    margin: 0 auto;
    padding:3rem 0;
    text-align:center;
    @media(max-width: 840px){
        width:90%;
    }
    h1{
        font-size:1.9rem;
    }
    p{
        width:28rem;
        margin: 0 auto;
        padding: 1rem 0;
        font-size:0.9rem;
        @media(max-width:500px){
            width:90%;
        }
    }
`;

const Slide = styled.div``;