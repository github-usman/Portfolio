import React,{useRef} from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { styled } from "styled-components";

let data = [
    {
        img:"https://res.cloudinary.com/dwz20s6wt/image/upload/v1693148371/certificate%20images/Screenshot_from_2023-08-27_20-28-32_wkiegs.png",
        disc:"Radar Report News headlines aim to encapsulate the essence of a news story in just a few words. It provide a quick overview of what the news article is about.",
        link:"https://radarreport.netlify.app/",
        title:"Radar Report",
        img_title:"Radar_Report"
    },
    {
      img:"https://res.cloudinary.com/dwz20s6wt/image/upload/v1693158978/certificate%20images/websites/Screenshot_from_2023-08-27_23-24-16_xquryc.png",
      disc:"Discover a new era of note-taking with MyOnlineNotes: where effortless organization meets secure accessibility for your thoughts, ideas, and information. Elevate your note-Making journey by signing up now!",
      link:"https://myonlinenotes.netlify.app/",
      title:"MyOnlineNotes",
      img_title:"My_Online_Notes"
    },
    {
      img:"https://res.cloudinary.com/dwz20s6wt/image/upload/v1693159993/certificate%20images/websites/Screenshot_from_2023-08-27_23-42-19_b3jhkh.png",
      disc:"MyTextModify is a word counter and a character counting utility which can be used to manipulate your text in the way you want. You can remove extra space to lowercase to uppercase and uppercase to lowercase",
      link:"https://mytextmodify.netlify.app/",
      title:"MyTextModify",
      img_title:"My_text_modify"
    },
    {
      img:"https://res.cloudinary.com/dwz20s6wt/image/upload/v1704778607/certificate%20images/websites/Screenshot_from_2024-01-09_11-06-26_a0tbe3.png",
      disc:"Doctor and patient application where patients can book an appointment with a doctor. This is an prototype not the real one, actual application is running by Organisation named as Pearlthoughts. During my Internship I have contributed on that project",
      link:"https://schedulapatient.netlify.app/",
      title:"Schedula Patient...",
      img_title:"Schedula_ProtoType_Prototype"
    },
    {
      img:"https://res.cloudinary.com/dwz20s6wt/image/upload/v1693159481/certificate%20images/websites/Screenshot_from_2023-08-27_23-32-17_gguq7q.png",
      disc:"A virtual piano is an application designed to simulate playing a piano on a computer. The virtual piano is played using a keyboard and/or mouse and typically comes with many features found on a digital piano.",
      link:"https://virtualpiano2023.netlify.app/",
      title:"Virtual Piano",
      img_title:"Virtual_Piano"
    }
    
    
];

const SliderComp = () => {
    const arrowRef = useRef(null);

    let sliderProject = "";
    sliderProject = data.map((item,i)=>{
      return  <Project item={item} key={i}/>
    })
    var settings = {
        className: "center",
         centerMode: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows:false,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
              centerMode:false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode:false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:false
            }
          }
        ]
      };
      return (
        <Container>
          <Slider ref={(arrowRef)} {...settings}>
            
           {sliderProject} 
           
          </Slider>
          <Buttons>
                <button onClick={()=>arrowRef.current.slickPrev()} className="back"><IoIosArrowBack/></button>
                <button onClick={()=>arrowRef.current.slickNext()} className="forw"><IoIosArrowForward/></button>
                
          </Buttons>
        </Container>
      );
  

 
};

export default SliderComp;

const Container = styled.div`
    position:relative;
`
const Buttons = styled.div`
    button{
        width:2rem;
        height:2rem;
        background-color:rgba(255, 255, 255, 0.312);
        cursor: pointer;
        color:#01be96;
        border:none;
        position:absolute;
        top:45%;
        right:-1rem;
        border-radius:5px;
        &:hover{
            background-color:#01be96;
            color:black;
        }
    }
    .back{
        left:-1rem;
    }

  
`