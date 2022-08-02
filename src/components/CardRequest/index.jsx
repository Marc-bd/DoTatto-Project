import { useEffect, useState } from "react";
import { deleteJobs } from "../../services/delete";
import { jobFilter } from "../../services/filters";
import { getUser } from "../../services/get";
import { changeStatusJob } from "../../services/patch";
import { moveToHistory } from "../../services/post";

import Button from "../Button";
import { Content, StyledCardRequest } from "./style";

export const CardRequest = ({ userId, isOwer = true }) => {
  const [value, setValue] = useState([]);
  const [valueOwn, setValueOwn] = useState([]);

  useEffect(() => {
    async function get() {
      const userName = await getUser(userId);

      setValue(await jobFilter("name", userName.name));

      setValueOwn(await jobFilter("nameReceive", userName.name));
    }

    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function editStatus(id, text) {
    await changeStatusJob(
      {
        status: text,
      },
      id
    );
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }

  return (
    <>
      {isOwer ? (
        <StyledCardRequest>
          <h2>Meus Pedidos</h2>
          <Content>
            {value?.map((elem, i) => (
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
        </StyledCardRequest>
      ) : (
        <StyledCardRequest>
          <h2>Pedidos Recebidos</h2>
          <Content>
            {valueOwn?.map((elem, i) => (
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
                {elem.status !== "Aceito" && elem.status !== "Rejeitado" ? (
                  <>
                    <Button
                      onClick={async () => {
                        await editStatus(elem.id, "Aceito");
                      }}
                      backColor="#4D4D4D"
                      textColor="#FFFFFF"
                    >
                      Aceitar
                    </Button>
                    <Button
                      onClick={async () => {
                        await editStatus(elem.id, "Rejeitado");
                      }}
                      backColor="#4D4D4D"
                      textColor="#FFFFFF"
                    >
                      Rejeitar
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={async () => {
                      let newData = {};

                      const {
                        phone,
                        full_date,
                        name,
                        nameReceive,
                        studioId,
                        tattooId,
                        status,
                        userId,
                      } = elem;

                      newData.phone = phone;
                      newData.full_date = full_date;
                      newData.name = name;
                      newData.nameReceive = nameReceive;
                      newData.status = status;
                      newData.userId = userId;
                      studioId !== undefined
                        ? (newData.studioId = studioId)
                        : (newData.tattooId = tattooId);

                      await moveToHistory(newData);
                      await deleteJobs(elem.id);
                      setTimeout(() => {
                        window.location.reload();
                      }, 400);
                    }}
                    backColor="#4D4D4D"
                    textColor="#FFFFFF"
                  >
                    Finalizar
                  </Button>
                )}
              </section>
            ))}
          </Content>
        </StyledCardRequest>
      )}
    </>
  );
};
