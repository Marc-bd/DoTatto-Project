import styled from "styled-components";

export const Container = styled.div`
background-color: #454545;
`

export const Cont=styled.div`
min-height: ${(props)=> props.height ? props.height : 'auto'};
`