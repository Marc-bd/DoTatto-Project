import { DescriptionCard, FormArea, StyledCard } from "./style";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { getArtist, getStudio } from "../../services/get";
import Button from "../Button";
import { createArtistCall, createStudioCall } from "../../services/post";
import { useNavigate } from "react-router-dom";
let isStudio;

const MainCard = (idProfile) => {
  const [value, setValue] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    isStudio = JSON.parse(localStorage.getItem("@doTattoo:mainCard")).isStudio;

    async function get() {
      let userObj = {};
      isStudio
        ? (userObj = await getStudio(
            JSON.parse(localStorage.getItem("@doTattoo:mainCard")).id
          ))
        : (userObj = await getArtist(
            JSON.parse(localStorage.getItem("@doTattoo:mainCard")).id
          ));
      setValue(userObj);
    }
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getData(obj) {
    const typeUser = JSON.parse(
      localStorage.getItem("@DoTattoo:userInfo")
    ).type;

    if (typeUser !== obj.type) {
      const { contact, full_date, type, userId } = obj;
      const completeObj = {};
      completeObj.phone = contact;
      completeObj.full_date = full_date;
      completeObj.userId = JSON.parse(
        localStorage.getItem("@DoTattoo:userInfo")
      ).id;
      type === "studio"
        ? (completeObj.studioId = userId)
        : (completeObj.tattooId = userId);
      completeObj.nameReceive = JSON.parse(
        localStorage.getItem("@doTattoo:mainCard")
      ).name;
      completeObj.name = JSON.parse(
        localStorage.getItem("@DoTattoo:userInfo")
      ).name;
      completeObj.status = "Pendente";
      typeUser === "studio"
        ? await createArtistCall(completeObj)
        : await createStudioCall(completeObj);
        toast.success(`Chamado aberto, vamos aguardar o retorno do ${type === 'studio' ? 'Artist' : 'Studio'}`)
      navigate(`/perfiluser/${completeObj.userId}`);
    } else {
      toast.error("Você não pode contratar o mesmo tipo");
    }
  }

  return (
    <StyledCard>
      {value.userId !== undefined && (
        <>
          <img
            className="imageDescription"
            src={value.img_URL}
            alt={isStudio ? "Imagem do estúdio" : "Imagem de uma tatuagem"}
          />
          <DescriptionCard>
            <p>{value.descriptionCard}</p>

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
              <span>
                Valor: {isStudio ? value.price : `${value.price_hour} por Hora`}
              </span>
              <span>Seção: {value.session}</span>
            </div>
            {isStudio && (
              <div className="matarialList">
                <h3>Lista de Materiais</h3>
                <ul>
                  {value.material_list.map((elem, i) => (
                    <li key={i}>{elem}</li>
                  ))}
                </ul>
              </div>
            )}
          </DescriptionCard>
        </>
      )}
      <FormArea>
        <h2>Deseja contatar?</h2>
        <Button onClick={() => getData(value)}>Abrir Chamado</Button>
      </FormArea>
    </StyledCard>
  );
};

export default MainCard;
