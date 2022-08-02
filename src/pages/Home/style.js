import styled from 'styled-components'

export const Container = styled.div`
background-color: #202020;
`
export const ContBackground = styled.div`
  
svg{
    position: fixed;
    display: flex;
  }
  //filter: opacity(40%);
  @media (min-width: 768px){
  }
  @media (min-width: 1024px){ 
  }


`

export const Cont = styled.div`
display: flex;
flex-direction: ${(props)=> props.fDirection ? props.fDirection : 'row'};
justify-content: ${(props)=> props.jContent ? props.jContent : 'space-evenly' };
align-items: ${(props)=> props.aItens ? props.aItens : null };
padding: 10px;
margin-bottom: ${(props)=>props.mBottom ? props.mBottom : '0px'};

p{
  display: flex;
  font-size: 24px;
  font-family: 'Beau Rivage', cursive;
  color: #fff;
  padding: 5% 0px 0px 10%;
  @media (min-width: 768px){
    font-size: 35px;
  }
  @media (min-width: 1024px){ 
    font-size: 57px;
  }
}
h4{
  font-family: 'Beau Rivage', cursive;
  color: grey;
  font-size: 13vw;
  position: relative;
  left: -30px;
  top: -20px;
  @media (min-width: 768px){
    font-size: 80px;
    left: -120px;
    top: -40px;
  }
  @media (min-width: 1024px){ 
    font-size: 130px;
    left: -140px;
    top: -60px;
  }
}
`

export const Image= styled.img`
  display: flex;
  position: absolute;
  left: 10px;
  width: 18%;
  @media (min-width: 768px){
  }
  @media (min-width: 1024px){ 
    left: 20px;
  }
`
export const BackgroundImage= styled.svg`
  display: flex;
  position: fixed;
  width: 100vw;
  height:  100vh;


  ;
`