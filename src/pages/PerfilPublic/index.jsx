import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { InfoUser } from "../../components/InfoUser";
import MainCard from "../../components/MainCard";
import { ShowCaseProfile } from "../../components/ShowCaseProfile";
import { Container } from "./style";


export default function PerfilPublic() {
  const { userId } = useParams();
  const navigate = useNavigate()

  const url = window.location.href
  const urlId = url.substring(url.length-1, url.length)
  const currentUser = JSON.parse(localStorage.getItem("@DoTattoo:userInfo"));
  useEffect(()=>{
  if(currentUser){
    const typeUser = currentUser.type
    const id = JSON.parse(localStorage.getItem('@doTattoo:mainCard')).userId
    if( id !== parseInt(urlId)){
        navigate( `/dash${typeUser === 'studio' ? 'artist' : 'studio'}`)
    }
  }})


  return (
    <>
      <Container>
        <Header isDashboard={true} />
        <div className="contentMain">
          <InfoUser idValue={userId} />
          <MainCard idProfile={userId} />
        </div>
        <div className="contentProfile">
          <h3>Mais Anúncios </h3>
          <div className="contentAnuncios">
            <ShowCaseProfile userId={userId} />
          </div>
        </div>
        <Footer />
      </Container>
    </>
  );
}

/*


      */
