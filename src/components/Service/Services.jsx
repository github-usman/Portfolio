import React from "react";
import { styled } from "styled-components";
import Card from "./Card";
import {BiLogoNodejs,BiLogoMongodb,BiLogoReact,BiLogoJava,BiLogoPython,BiLogoCPlusPlus,BiLogoCss3,BiLogoJavascript} from "react-icons/bi";
import {AiOutlineHtml5,AiFillGithub} from "react-icons/ai";
import {FaBootstrap} from "react-icons/fa";
import {SiThealgorithms} from "react-icons/si";
import { Slide,Zoom } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="skills">
        <Slide direction="down" triggerOnce="true">
      <h4>
        My <span>Skills</span>
      </h4>
      <h1>What I can Do</h1>
      </Slide>
      <Cards>
        <Zoom triggerOnce="true">
        <Card
            Icon={BiLogoReact}
            title={"React.Js"}
            disc={"Passionate React.js beginner with a track record of successfully delivering multiple projects. Enthusiastic about crafting user-friendly web interfaces through clean coding and problem-solving. Eager to collaborate and contribute to dynamic application development."}
        />
        <Card
            Icon={BiLogoJavascript}
            title={"JavaScript"}
            disc={"I love working with JavaScript, and I've completed several projects that show my problem-solving skills. I enjoy building interactive and efficient websites, and I'm excited to join projects where I can use the potential of JavaScript to create cool things."}
        />
      
        <Card
            Icon={BiLogoMongodb}
            title={"MongoDB"}
            disc={"Passionate about MongoDB databases, I've worked on multiple projects displaying my proficiency. I enjoy designing and managing database systems, and I'm enthusiastic about contributing my skills to projects that involve MongoDB."}
        />
        <Card
            Icon={BiLogoJava}
            title={"Java"}
            disc={"As a Java beginner, I'm excited to explore the world of programming. I've started my journey by working on small projects to learn and apply Java concepts. I look forward to growing my skills and contributing to innovative projects that leverage Java's capabilities."}
        />
       
        <Card
            Icon={BiLogoPython}
            title={"Python"}
            disc={"I'm a Python enthusiast who's just starting out on this coding adventure. I've already dabbled in a few basic projects to grasp Python's fundamentals and possibilities. I'm eager to keep learning and to be part of projects that make the most of Python's versatility."}
        />
        <Card
            Icon={BiLogoCPlusPlus}
            title={"C++"}
            disc={"With a strong foundation in C++ gained through learning Data Structures and Algorithms, I'm proficient in creating efficient and logical solutions. My grasp of C++ allows me to craft robust and optimized code. Excited to apply these skills in real-world projects."}
        />

        <Card
            Icon={BiLogoCss3}
            title={"CSS"}
            disc={"Passionate about CSS, I've honed my skills by working on various projects to create visually appealing and responsive designs. I enjoy bringing websites to life with creative styling and layouts. Eager to collaborate on projects that require a keen eye for design."}
        />
        <Card
            Icon={BiLogoNodejs}
            title={"Node.Js"}
            disc={"I really enjoy using Node.js. I've been working on projects that involve building the backend of websites and applications. I'm excited to contribute my skills to projects that rely on Node.js for creating powerful and reliable server-side functions."}
        />
    
        <Card
            Icon={AiOutlineHtml5}
            title={"HTML"}
            disc={"I've used it to create the structure of various web projects. I enjoy turning ideas into well-structured web pages. Excited to collaborate on projects that require a strong foundation in HTML to build engaging online experiences."}
        /><Card
            Icon={AiFillGithub}
            title={"GitHub"}
            disc={"Using it to showcase my coding journey through various repositories. I do open-source projects and managing version control. Excited to contribute to projects that value collaboration and effective code management on GitHub."}
        />
      
        <Card
            Icon={FaBootstrap}
            title={"Bootstrap"}
            disc={"I use Bootstrap to quickly design web layouts that work well on different screens. I make things look nice by using ready-made parts and customizing them. I'm excited to help projects with good designs using Bootstrap."}
        />
        <Card
            Icon={SiThealgorithms}
            title={"Data Structure & Algo."}
            disc={"I've gained significant experience by solving around 600 problems on platforms like CodeChef, LeetCode, and Codeforces. I inhanced my problem-solving abilities and algorithmic thinking."}
        />
        </Zoom>

        
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
    width:80%;
    max-width:1280px;
    margin:1rem auto;
    padding:3rem auto;
    @media(max-width:840px){
        width: 90%;
    }

    h1{
        padding-top:1rem;
    }
    span{
        font-weight:lighter;
    }
`
const Cards = styled.div`
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    margin-top:4rem;
    gap:0.8rem;

`

