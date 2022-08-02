import React, { useEffect, useState } from "react";
import { getAdress, getUser } from "../../services/get";
import { StyledInfoUser } from "./style";

export const InfoUser = ({ idValue }) => {
  const [value, setValue] = useState({});
  const [adress, setAdress] = useState({});
  useEffect(() => {
    async function get() {
      const obj = await getUser(idValue);
      setAdress(await getAdress(obj.cep));
      setValue(obj);
    }
    get();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledInfoUser>
        {value?.type === "studio" ? (
          <>
            <div className="infoBox">
              <h2>{value.name}</h2>
              <p>{value.description}</p>
              <div>
                <span>CEP: {adress.cep},</span>
                <span>Rua: {adress.logradouro},</span>
                <span>Bairro: {adress.bairro},</span>
                <span>Cidade: {adress.localidade},</span>
                <span>Estado: {adress.uf},</span>
                <span>Número: {value.num_home}</span>
              </div>
            </div>
            <img src={value.img_perfil} alt="foto do perfil do studio" />
          </>
        ) : (
          <>
            <div className="infoBox">
              <h2>{value.name}</h2>
              <p>{value.description}</p>
            </div>

            <img src={value.img_perfil} alt="foto do perfil do tatuador" />
          </>
        )}
      </StyledInfoUser>
    </>
  );
};
