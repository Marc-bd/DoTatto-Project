import styled from "styled-components";

export const Container = styled.div`
flex-direction: ${(props=>props.fDirection ? props.fDirection : "row")};
display: flex;
align-items: center;
width: 100%;    
height: 100px;
padding: 25px;
margin-top: 20px;

@media (min-width: 768px){
  height: 225px;
}
@media (min-width: 1024px){
  height: 310px;
}
`
export const ContPosition = styled.div`
display: flex;
justify-content:${(props)=>props.jContent ? props.jContent : 'flex-start'};
align-items: center;
width: 320px;
height: 100px;

@media (min-width: 768px){
  width: 90%;
  height: 225px;
}
@media (min-width: 1024px){
  width: 1024px;
  height: 310px;
}
`

export const Cont = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: min-content;
`

export const ContImage = styled.div`
width: 100px;
height: 100px;
display: flex;
align-items: center;
justify-content: center;

@media (min-width: 768px){
  width: 225px;
  height: 225px;
      .img{
        width: 224px;
        height: 224px;
      }  
  }
  @media (min-width: 1024px){
    width: 310px;
    .img{
      width: 310px;
      height: 310px;
    }
  }
  
`
export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0px 0px 13px 1px rgba(255,255,255,1);
`

export const DevName = styled.h1`
  position: relative;
  width: max-content;
  left: ${(props)=>props.left ? props.left : '5px' };
  font-family: 'Beau Rivage', cursive;
  font-size: 30px;
  color: white; text-shadow: white 0em 0em 0.1em;
  -webkit-text-stroke: 0.1px black;
  @media (min-width: 768px){
    font-size: 80px;
  }
  @media (min-width: 1024px){ 
    font-size: 120px;
  }
`

export const DevFunction = styled.h3`
  position: relative;
  left: ${(props)=>props.left ? props.left : '0px'};
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-size: 13px;
  @media (min-width: 768px){
    font-size: 33px;
  }
  @media (min-width: 1024px){ 
    font-size: 55px;
  }
  `

export const GitHubIcon= styled.div`
  position: relative;
  cursor: pointer;
  top: -38px;
  left: 32px;
  margin: 0px;
  @media (min-width: 768px){
    top: -90px;
    left: 80px;
  }
  @media (min-width: 1024px){
    top: -120px;
    left: 103px;
  }
  `

export const LinkedInIcon =styled.div`
  position: relative;
  cursor: pointer;
  top: 45px;
  left: -35px;
  @media (min-width: 768px){
    top: 90px;
    left: -75px;
  }
  @media (min-width: 1024px){
    top: 127px;
    left: -105px;
  }
`

export const GitHubIconRight = styled.div`
position: relative;
cursor: pointer;
top: -43px;
left: 110px;
margin: 0px;
@media (min-width: 768px){
  top: -100px;
  left: 230px;
  }
  @media (min-width: 1024px){ 
    top: -150px;
    left: 320px;
  }
`

export const LinkedInIconRight =styled.div`
position: relative;
cursor: pointer;
top: 45px;
left: -98px;
@media (min-width: 768px){
  top: 80px;
  left: -230px;
  }
  @media (min-width: 1024px){
    top: 115px;
    left: -315px;
  }
`
