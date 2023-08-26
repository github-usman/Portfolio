import React from "react";
import { styled } from "styled-components";
import Card from "./Card";
import {BiLogoNodejs,BiLogoMongodb,BiLogoReact,BiLogoJava,BiLogoPython,BiLogoCPlusPlus,BiLogoCss3,BiLogoJavascript} from "react-icons/bi";
import {AiOutlineHtml5,AiFillGithub} from "react-icons/ai";
import {FaBootstrap} from "react-icons/fa";
import {BsGit} from "react-icons/bs";
import {SiThealgorithms} from "react-icons/si";


const Services = () => {
  return (
    <Container>
      <h4>
        My <span>Skills</span>
      </h4>
      <h1>What I can Do</h1>
      <Cards>
        <Card
            Icon={BiLogoReact}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        />
        <Card
            Icon={BiLogoNodejs}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        />
        <Card
            Icon={BiLogoMongodb}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        />
        <Card
            Icon={BiLogoJava}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        />
        <Card
            Icon={BiLogoPython}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        />
        <Card
            Icon={BiLogoCPlusPlus}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        />
        <Card
            Icon={BiLogoCss3}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        />
        <Card
            Icon={BiLogoJavascript}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        /><Card
            Icon={AiOutlineHtml5}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        /><Card
            Icon={AiFillGithub}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        /><Card
            Icon={FaBootstrap}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        /><Card
            Icon={BsGit}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        /><Card
            Icon={SiThealgorithms}
            title={"Beginner"}
            disc={"People from around the world tend to have a similar concept of happiness and can recognize happiness in others."}
        />

        
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

