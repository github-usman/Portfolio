import React, { useRef } from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import Certificate from './Certificate';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Slide } from 'react-awesome-reveal';

let clients = [

    {
        name : "Python_with_Data_Science",
        certi_name : " Python with Data Science",
        img_url : "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693141176/certificate%20images/Python_with_Data_Science_jmc10j.jpg",
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "Intro_network",
        certi_name : "Introduction to Networks",
        img_url : "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693141145/certificate%20images/USMANALI_ANSARI-NF_SKL21_CCNA_M1-certificate_1__page-0001_lpcwzb.jpg",
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "Internet_Of_Things",
        certi_name : "Internet of Things(IoT)- MSME",
        img_url : "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693141132/certificate%20images/IoT_Agra_4_Aug-35_page-0001_p0lngb.jpg",
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "Algorithmic_toolbox",
        certi_name : "Data Structure And Algorithms",
        img_url : "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693141127/certificate%20images/DAA_usmanCertificate_page-0001_n26e4j.jpg",
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "Complete_webdevelopment_bootcamp",
        certi_name : "Complete Web Development",
        img_url : "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693141173/certificate%20images/The_Complete_2022_Web_development_Bootcamp_ajbezl.jpg",
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
    {
        name : "career_skills",
        certi_name : "Career Skills TCS",
        img_url : "https://res.cloudinary.com/dwz20s6wt/image/upload/v1693141120/certificate%20images/career_Skills_By_TCS_page-0001_lslf3l.jpg",
        disc : `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Temporibus consequuntur dolores labore natus similique nemo doloribus cum accusantium adipisci maiores.`
    },
   
    
    
]
var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    speed:200,
    arrows : false,
  
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]}

const Certificates = () => {
    const arrowRef = useRef(null);
    let clientDisc = "";
    clientDisc = clients.map((item, i) => (
        <Certificate item={item} key={i}/>
    ))
  return (
    <Container id='certificates'>
          <Slide direction='left' triggerOnce="false">
            <span className="green">Certificates</span>
            <h1>List of Recent Certificate</h1>
            </Slide>
        <Testimonials>
            <Slider ref={arrowRef} {...settings}>
                {clientDisc}
            </Slider>
            <Buttons>
                <button
                onClick={() => arrowRef.current.slickPrev()}
                ><IoIosArrowBack/></button>
                <button
                onClick={() => arrowRef.current.slickNext()}
                ><IoIosArrowForward/></button>
            </Buttons>
        </Testimonials>
    </Container>
  )
}

export default Certificates

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 0;

    @media(max-width:840px){
        width: 90%;
    }

    span{
        font-weight: 700;
        text-transform: uppercase;
    }

    h1{
        padding-top: 1rem;
        text-transform: capitalize;
    }

    .slick-list, .slick-slider, .slick-track{
        padding: 0;
    }

    .slick-dots{
        text-align: left;
        margin-left: 1rem;
    }

    .slick-dots li button:before{
        content: "";
    }

    .slick-dots li button{
        width: 9px;
        height: 4px;
        background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
        padding: 0.1rem;
        margin-top: 1rem;
        transition: all 400ms ease-in-out;
        border-radius: 50px;
    }
    
    .slick-dots li.slick-active button{
        background: #01be96;
        width: 15px;
    }

    .slick-dots li{
        margin: 0;
    }
`

const Testimonials = styled.div`
    margin-top: 2rem;
    position: relative;
`
const Buttons = styled.div`
    position: absolute;
    right: 0.7rem;
    bottom: -2rem;

    button{
        background-color: transparent;
        margin-left: 0.5rem;
        border: none;
        color: #01be96;
        cursor: pointer;
        font-size: 1.1rem;
    }

    @media(max-width:530px){
        display: none;
    }
`