import { useNavigate, useParams } from "react-router-dom";
import { CardRequest } from "../../components/CardRequest";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { CreateEditRemoveAd } from "../../components/CreateEditRemoveAd";
import { HistoryCall } from "../../components/HistoryCall";
import { ProfileEdit } from "../../components/ProfileEdit";
import { RequestCotainer } from "../../components/ProfileEdit/style";
import { PickerContainer, StyledPage } from "./style";
import { useEffect, useState } from "react";

export default function PerfilPrivate() {
  const [current, setCurrent] = useState("pending");
  const params = useParams();

  const navigate = useNavigate();

  const url = window.location.href;
  const urlId = url.substring(url.length - 1, url.length);
  const currentUser = JSON.parse(localStorage.getItem("@DoTattoo:userInfo"));
  useEffect(() => {
    if (currentUser.id !== parseInt(urlId)) {
      navigate(`/perfiluser/${currentUser.id}`);
      window.location.reload();
    }
  });

  return (
    <StyledPage>
      <Header isDashboard={true} />
      <ProfileEdit userId={params.userId} />
      <PickerContainer>
        <button
          className={current === "pending" ? "selected" : ""}
          onClick={() => {
            setCurrent("pending");
          }}
        >
          Pendentes
        </button>
        <button
          className={current === "history" ? "selected" : ""}
          onClick={() => {
            setCurrent("history");
          }}
        >
          Histórico
        </button>
      </PickerContainer>
      {current === "pending" ? (
        <RequestCotainer>
          <CardRequest userId={params.userId} />
          <CardRequest userId={params.userId} isOwer={false} />
        </RequestCotainer>
      ) : (
        <RequestCotainer>
          <HistoryCall userId={params.userId} />
        </RequestCotainer>
      )}
      <CreateEditRemoveAd userId={params.userId} />
      <Footer />
    </StyledPage>
  );
}
