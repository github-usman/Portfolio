import React from "react";
import { styled } from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
import usman_profile from "../images/usman_ali_ansari.png";
import { Slide } from "react-awesome-reveal";
const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left" triggerOnce="true">
        <Text>
          <h4>
            Hello! <span>I am</span>
          </h4>
          {/* <h1 className="green">Usman Ali Ansari</h1> */}
          <h3>full stack developer</h3>
          <p>
             👨🏻‍💻
            <p>
            A freshly graduated Computer Science & Engineering enthusiast with a  BE/B.Tech degree from IET Agra's class of 2023. 
              </p>
              💡
            <p style={{display:"inline"}}>I'm deeply passionate about algorithmic problem solving with a moderate foundation in data structures and algorithms, which I've cultivated over 2 years of competitive programming. My journey in competitive programming has been rewarding; with a 2<sup>nd</sup> Rank at IET Agra and 43 Global Rank on Codechef in 2022.
            </p>
            💼 
            <p> My collection of projects speaks for my
            dedication and passion.Each
            project has taught me something new. 
            </p> 
            <br />
            <p>I have laid a strong foundation in essential languages like HTML, CSS, and JavaScript, which form the bedrock of web development.I have eagerly delved into React.js.
            </p>
            <br />
            <p> I've also worked on projects that involve behind-the-scenes stuff. I've used MongoDB, Express.js, and Node.js to build strong foundations for websites. 
            </p>
            <br />
            <h4 style={{textAlign:"right"}}>Thank You !</h4>


            <div>
           <h2>Pearlthoughts | Paid Internship | Remote</h2> <br />
           <h3>Project Name : Schedula-IVR</h3>
            <p style={{display:"inline"}}> 03/10/2023 - 03/12/2023 <b >Software Developer</b></p> 
            <p> I worked on TypeScript, Nest.js, React.js, MySQL, IVR (Exotel-server), Azure
            services APIM, and GitHub.</p><br />
            <p style={{display:"inline"}}>07/09/2023 - 03/10/2023 <b> Front-End Developer </b></p>
            <p>
             Worked on frontend development using React.js, Next.js, TypeScript,
            Material-UI, Tailwind CSS, Wireframing, docker, APIs and GitHub.
            </p>
            </div>


          </p>
          <button> <a href="https://www.linkedin.com/in/u-s-m-a-n/"  target="_blank" rel="noreferrer">Let's talk</a></button>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <a href="https://github.com/github-usman" target="_blank" rel="noreferrer">
                  <AiOutlineGithub />
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/u-s-m-a-n/" target="_blank" rel="noreferrer">
                  <AiOutlineLinkedin />
                </a>
              </span>
              <span>
                <a href="https://leetcode.com/u_s_m_a_n/" target="_blank" rel="noreferrer">
                  <TbBrandLeetcode />
                </a>
              </span>
            </div>
          </Social>
        </Text>
      </Slide>
      <Slide direction="right" triggerOnce="true">
        <Profile>
          <img src={usman_profile} alt="usman" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  padding-bottom: 1rem;
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
    font-weight: 400;
    display:flex;
    justify-content:center;
    flex-direction:column;
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
    a{
      text-decoration:none;
      color:black;
      font-weight:400;
    }
    &:hover {
      margin-top: 2.9rem;
      filter: drop-shadow(0px 2px 10px #adc5c0c8);
      background-color: #547262;
      border:solid 0.001rem #fff;
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
      width: 50%;
    }
  }
  &:hover img {
    transform: translateY(-10px);
  }
`;
