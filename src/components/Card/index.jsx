import Button from "../Button";
import { DescriptionCard, HeaderCard, StyledCard } from "./style";
import flour from "../../assets/peonia.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../services/get";

const Card = ({
  object,
  isStudio = true,
  isProfile = false,
  isUserProfile = false,
  funcOnClick,
  funcDelete,
}) => {
  const navigate = useNavigate();
  const [value, setValue] = useState({});

  useEffect(() => {
    async function get() {
      let userObj = await getUser(object.userId);
      object.userImg = userObj.img_perfil;
      object.userName = userObj.name;
      object.userDescription = userObj.description;
      setValue(object);
    }
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledCard>
      {value.userId !== undefined && (
        <>
          <HeaderCard>
            <section>
              <img
                className="userImg"
                src={value.userImg}
                alt="Imagem do usuário"
              />
              <div>
                <h2>{value.userName}</h2>
                <p>
                  {value.userDescription.length > 80
                    ? `${value.userDescription?.slice(0, 77)}...`
                    : value.userDescription}
                </p>
              </div>
            </section>
            <img className="imageCard" src={flour} alt="Imagem do usuário" />
          </HeaderCard>
          <img
            className="imageDescription"
            src={value.img_URL}
            alt={isStudio ? "Imagem do estúdio" : "Imagem de uma tatuagem"}
          />
          <DescriptionCard>
            <p>
              {value.descriptionCard.length > 160
                ? `${value.descriptionCard.slice(0, 157)}...`
                : value.descriptionCard}
            </p>

            <div>
              <span>
                Dia: {value.full_date[0].day}/{value.full_date[0].mouth}/
                {value.full_date[0].year}
              </span>
              <span>
                Horas disponíveis:
                {value.full_date[0].hour_final -
                  value.full_date[0].hour_initial ===
                0
                  ? "24 horas"
                  : `${
                      value.full_date[0].hour_final -
                      value.full_date[0].hour_initial
                    } horas`}
              </span>
            </div>
            <div>
              {isStudio ? (
                <span>Valor: {value.price}</span>
              ) : (
                <span>Valor: {`${value.price_hour} por Hora`}</span>
              )}

              <span>Seção: {value.session}</span>
            </div>
          </DescriptionCard>
          <Button
            onClick={() => {
              if (!isUserProfile) {
                localStorage.setItem(
                  "@doTattoo:mainCard",
                  JSON.stringify({
                    id: value.id,
                    name: value.userName,
                    userId: value.userId,
                    isStudio,
                  })
                );
                navigate(`/perfil/${value.userId}`);
                isProfile && window.location.reload();
              } else {
                funcOnClick();
              }
            }}
            width="90%"
            height="48px"
            backColor={"#FFFFFF;"}
          >
            {!isUserProfile ? "Ver Proposta" : "Editar"}
          </Button>
          {isUserProfile && (
            <Button
              width="90%"
              height="48px"
              backColor="#FFFFFF"
              onClick={() => funcDelete()}
            >
              Deletar
            </Button>
          )}
        </>
      )}
    </StyledCard>
  );
};

export default Card;
