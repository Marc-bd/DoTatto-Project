import { useEffect, useState } from "react";
import { historyFilter } from "../../services/filters";
import { Content } from "../CardRequest/style";
import { StyledSection } from "./style";

export const HistoryCall = ({ userId }) => {
  const [requests, setRequests] = useState([]);
  const [artistReceived, setArtistReceived] = useState([]);
  const [studioReceived, setStudioReceived] = useState([]);
  const userType = JSON.parse(localStorage.getItem("@DoTattoo:userInfo")).type;
  useEffect(() => {
    async function get() {
      setRequests(await historyFilter("userId", userId));
      userType === "studio" &&
        setStudioReceived(await historyFilter("studioId", userId));
      userType === "artist" &&
        setArtistReceived(await historyFilter("tattooId", userId));
    }
    get();
  }, [userId, userType]);

  return (
    <>
      <StyledSection>
        <h2>Meus Pedidos, para</h2>
        <Content>
          {requests?.map((elem, i) => (
            <section key={i}>
              <h3>
                {elem.studioId === undefined
                  ? `Tatuador: ${elem.nameReceive}`
                  : `Estúdio: ${elem.nameReceive}`}
              </h3>
              <span className="dataHour">
                Dia: {elem.full_date[0].day}/{elem.full_date[0].mouth}/
                {elem.full_date[0].year}
              </span>
              {elem.status === "Aceito" && (
                <span className="phone">{elem.phone}</span>
              )}
              <span className="status">{elem.status} </span>
            </section>
          ))}
        </Content>
      </StyledSection>

      <StyledSection>
        <h2>Pedidos Recebidos, de</h2>
        <Content>
          {userType === "studio"
            ? studioReceived?.map((elem, i) => (
                <section key={i}>
                  <h3>
                    {elem.studioId !== undefined
                      ? `Tatuador: ${elem.name}`
                      : `Estúdio: ${elem.name}`}
                  </h3>
                  <span className="dataHour">
                    Dia: {elem.full_date[0].day}/{elem.full_date[0].mouth}/
                    {elem.full_date[0].year}
                  </span>
                  <span className="status">{elem.status} </span>
                </section>
              ))
            : artistReceived?.map((elem, i) => (
                <section key={i}>
                  <h3>
                    {elem.studioId !== undefined
                      ? `Tatuador: ${elem.name}`
                      : `Estúdio: ${elem.name}`}
                  </h3>
                  <span className="dataHour">
                    Dia: {elem.full_date[0].day}/{elem.full_date[0].mouth}/
                    {elem.full_date[0].year}
                  </span>
                  <span className="status">{elem.status} </span>
                </section>
              ))}
        </Content>
      </StyledSection>
    </>
  );
};
