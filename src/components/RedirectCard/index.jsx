import StudioImage from "../../assets/image/doTattooStudio.jpg"
import ArtistImage from "../../assets/image/doTattooArtist.jpg"

import { useNavigate } from 'react-router-dom'
import { Container } from "./styles"



export const RedirectCard = ({children})=>{
  const verify = localStorage.getItem("@DoTattoo:token")
  const navigate = useNavigate()

  function pageRedirect(type){
    if(verify !== null){
      if(type === 'Studio'){
        return navigate("/dashstudio")
      }else{
       return navigate("/dashartist")
      }
    }else{
      return navigate("/login")
    }
  }

  return(
    <Container onClick={()=>{pageRedirect(children)}}>
      {children === "Studio" ? (
        <img src={StudioImage} alt="studio" />
      ):(
        <img src={ArtistImage} alt="artist" />
      )}
      <h2>{children}</h2>
    </Container>
  )
}