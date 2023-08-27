import React from 'react'
import styled from 'styled-components'

const Certificate = (props) => {
    const {name,certi_name, img_url, disc} = props.item;
  return (
    <Container>
        <Header>
           {certi_name}
        </Header>
        <Body>
            {disc}
        </Body>
        <Footer>
            <img src={img_url} alt={name} />
        </Footer>
    </Container>
  )
}

export default Certificate

const Container = styled.div`
    background: linear-gradient(159deg, rgb(45, 45, 58) 0%, rgb(43, 43, 53) 100%);
    padding: 1.5rem 1rem;
    margin: 0 1rem;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight:bold;
    padding-bottom:0.5rem;
`
const Body = styled.p`
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
`
const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    
    img{
        width: 100%;
        height:15rem;
        border-radius:2px;
        object-fit: cover;
        cursor: pointer;
        @media(max-width: 538px){
            width: 100%;
            height:18rem;
        }
    }

    h1{
        font-size: 1.2rem;
        font-weight: 700;
        @media(max-width: 580px){
            font-size: 1rem;
        }
        @media(max-width: 538px){
            font-size: 0.9rem;
        }
    }

    p{
        font-size: 0.8rem;
        color: rgba(255,255,255,0.500);
        @media(max-width: 538px){
            font-size: 0.6rem;
        }
    }
`