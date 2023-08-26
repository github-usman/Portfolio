import React from "react";
import { styled } from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
import usman_profile from "../images/usman_ali_ansari.png";
const ProfComponent = () => {
  return (
    <Container>
      <Text>
        <h4>
          Hello! <span>I am</span>
        </h4>
        <h1 className="green">Usman Ali Ansari</h1>
        <h3>full stack developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque,
          assumenda, ipsam modi, debitis possimus libero alias corporis deserunt
          architecto optio hic officiis laboriosam repudiandae. Quas aliquid
          repe.
        </p>
        <button>Let's talk</button>
        <Social>
          <p>Check out my</p>
          <div className="social-icons">
            <span>
              <a href="/">
                <AiOutlineGithub />
              </a>
            </span>
            <span>
              <a href="/">
                <AiOutlineLinkedin />
              </a>
            </span>
            <span>
              <a href="/">
                <TbBrandLeetcode />
              </a>
            </span>
          </div>
        </Social>
       
      </Text>
      <Profile>
        <img src={usman_profile} alt="usman" />
      </Profile>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom:1rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 840px) {
    width: 90%;
  }
  @media (max-width: 740px) {
  
    flex-direction: column;
  }
`;
const Text = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 700;
  }
  span {
    font-weight: lighter;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 700;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
  }
  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #01be96;
    border: none;
    color: #fff;
    font-weight: 500;
    filter: drop-shadow(5px 5px 15px #01be9551);
    border-radius: 3px;
    &:hover {
      filter: drop-shadow(5px 5px 10px #a3c5be90);
      background-color: #547262;
    }
  }
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1rem;

  p {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    @media (max-width: 790px) {
      font-size: 0.7rem;
    }
  }
  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2.3rem;
      clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
      );
      background-color: #01be96;
      position: relative;
      transition: transform 500ms ease-in-out;
      &:hover {
        transform: rotate(360deg);
      }
    }
    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    filter: drop-shadow(1px 1px 8px #fafafa);
    border: solid 2px #fafafa;
    border-radius: 8px;
    width: 15rem;
    transition: transform 400ms ease-in-out;
    @media (max-width: 840px) {
      width: 10rem;
    }
    @media (max-width: 740px) {
      width: 15rem;
    }
  }
  &:hover img {
    transform: translateY(-10px);
  }
`;
