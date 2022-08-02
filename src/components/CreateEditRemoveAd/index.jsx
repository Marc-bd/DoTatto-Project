import { useEffect, useState } from "react";
import { artistFilter, studioFilter } from "../../services/filters";
import { BaseInput } from "../BaseInput";
import Card from "../Card";
import {
  StyledBox,
  StyledMain,
  StyledModal,
  StyledSection,
  NewAdContainer,
} from "./style";
import { useForm } from "react-hook-form";
import Button from "../Button";
import BaseSelect from "../BaseSelect";
import { deleteArtistAdv, deleteStudioAdv } from "../../services/delete";
import { editArtistInfoAdv, editStudioInfoAdv } from "../../services/patch";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createArtistAdv, createStudioAdv } from "../../services/post";

let isStudio;
export const CreateEditRemoveAd = ({ userId }) => {
  const [arr, setArr] = useState([]);
  const [value, setValue] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const schema = yup.object().shape({
    descriptionCard: yup.string().required("Campo Obrigatório!"),
    img_URL: yup.string().required("Campo Obrigatório!"),
    price: yup.string().required("Campo Obrigatório!"),
    contact: yup.string().required("Campo Obrigatório!"),
    year: yup.string().required("Campo Obrigatório!"),
    mouth: yup.string().required("Campo Obrigatório!"),
    day: yup.string().required("Campo Obrigatório!"),
    hour_initial: yup.string().required("Campo Obrigatório!"),
    hour_final: yup.string().required("Campo Obrigatório!"),
  });

  useEffect(() => {
    isStudio = JSON.parse(localStorage.getItem("@DoTattoo:userInfo")).type;

    async function get() {
      isStudio === "studio"
        ? setArr(await studioFilter("userId", userId))
        : setArr(await artistFilter("userId", userId));
    }
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (value.contact !== undefined) {
      let defaultValues = {};
      defaultValues.descriptionCard = value.descriptionCard;
      defaultValues.img_URL = value.img_URL;
      isStudio === "studio"
        ? (defaultValues.price = value.price)
        : (defaultValues.price = value.price_hour);
      defaultValues.contact = value.contact;
      defaultValues.year = value.full_date[0].year;
      defaultValues.mouth = value.full_date[0].mouth;
      defaultValues.day = value.full_date[0].day;
      defaultValues.hour_initial = value.full_date[0].hour_initial;
      defaultValues.hour_final = value.full_date[0].hour_final;

      reset({ ...defaultValues });
    } else {
      let defaultValues = {};
      defaultValues.descriptionCard = "";
      defaultValues.img_URL = "";
      defaultValues.price = 0;
      defaultValues.contact = "";
      defaultValues.year = "";
      defaultValues.mouth = "";
      defaultValues.day = "";
      defaultValues.hour_initial = "";
      defaultValues.hour_final = "";

      reset({ ...defaultValues });
    }
  }, [reset, value]);

  const onSubmitFunction = async (data) => {
    if (data.button === "edit") {
      data.id = value.id;
      const newData = {};
      newData.userId = userId;
      newData.contact = data.contact;
      newData.descriptionCard = data.descriptionCard;
      newData.img_URL = data.img_URL;
      isStudio === "studio"
        ? (newData.price = data.price)
        : (newData.price_hour = data.price);
      newData.session = data.session;

      newData.full_date = [
        {
          year: data.year,
          mouth: data.mouth,
          day: data.day,
          hour_initial: data.hour_initial,
          hour_final: data.hour_final,
        },
      ];

      isStudio === "studio"
        ? await editStudioInfoAdv(newData, data.id)
        : await editArtistInfoAdv(newData, data.id);
      setTimeout(() => window.location.reload(), 500);
    } else {
      const newData = {};
      newData.userId = userId;
      newData.contact = data.contact;
      newData.descriptionCard = data.descriptionCard;
      newData.img_URL = data.img_URL;
      isStudio === "studio"
        ? (newData.price = data.price)
        : (newData.price_hour = data.price);
      newData.session = data.session;

      newData.full_date = [
        {
          year: data.year,
          mouth: data.mouth,
          day: data.day,
          hour_initial: data.hour_initial,
          hour_final: data.hour_final,
        },
      ];
      if (isStudio === "studio") {
        newData.material_list = [
          "machine",
          "alcool",
          "cloths",
          "paint",
          "plastic film",
          "especial oil",
          "paint",
        ];
        newData.type = "studio";
      } else {
        newData.type = "artist";
      }

      isStudio === "studio"
        ? await createStudioAdv(newData, data.id)
        : await createArtistAdv(newData, data.id);
      setTimeout(() => window.location.reload(), 500);
    }
  };

  async function deleteCard(id) {
    isStudio === "studio"
      ? await deleteStudioAdv(id)
      : await deleteArtistAdv(id);
    setTimeout(() => window.location.reload(), 500);
  }

  const typeClient = [
    {
      value: "Sim",
      text: "Sim",
    },
    {
      value: "Não",
      text: "Não",
    },
  ];

  const typeButton = [
    {
      value: "edit",
      text: "Editar",
    },
    {
      value: "create",
      text: "Criar",
    },
  ];

  return (
    <>
      <StyledMain>
        {modalIsOpen ? (
          <StyledModal>
            <StyledBox onSubmit={handleSubmit(onSubmitFunction)}>
              <BaseInput
                label="Descrição"
                name="descriptionCard"
                register={register}
                error={errors.descriptionCard?.message}
              />
              <BaseInput
                label="Link da imagem"
                name="img_URL"
                register={register}
                error={errors.img_URL?.message}
              />

              <BaseInput
                label="Preço"
                name="price"
                register={register}
                error={errors.price?.message}
              />

              <BaseInput
                label="Número de contato"
                name="contact"
                register={register}
                error={errors.contact?.message}
              />
              <BaseInput
                label="Ano"
                name="year"
                register={register}
                error={errors.year?.message}
              />
              <BaseInput
                label="Mês"
                name="mouth"
                register={register}
                error={errors.mouth?.message}
              />
              <BaseInput
                label="Dia"
                name="day"
                register={register}
                error={errors.day?.message}
              />
              <BaseInput
                label="Hora de início"
                name="hour_initial"
                register={register}
                error={errors.hour_initial?.message}
              />
              <BaseInput
                label="Hora de final"
                name="hour_final"
                register={register}
                error={errors.hour_final?.message}
              />
              <BaseSelect
                label="É por seção ?"
                idFor="session"
                array={typeClient}
                register={register}
                widthSelect={"95%"}
                widthBox={"100%"}
                selectColor={"var(--grey)"}
                selectTextColor={"var(--white)"}
                className="selectSignUp"
              />
              <BaseSelect
                label="Criar ou Editar ?"
                idFor="button"
                array={typeButton}
                register={register}
                widthSelect={"95%"}
                widthBox={"100%"}
                selectColor={"var(--grey)"}
                selectTextColor={"var(--white)"}
                className="selectSignUp"
              />
              <div>
                <Button
                  type="submit"
                  width="100px"
                  height="40px"
                  backColor="#282828"
                  textColor="#FFFFFF"
                >
                  Finalizar
                </Button>
              </div>
            </StyledBox>
            <span
              className="close"
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              X
            </span>
          </StyledModal>
        ) : (
          ""
        )}

        <StyledSection>
          {arr.length > 0 ? (
            arr?.map((elem, i) => (
              <Card
                key={i}
                object={elem}
                isStudio={isStudio === "studio" ? true : false}
                isUserProfile={true}
                funcOnClick={() => {
                  setValue(elem);
                  setModalIsOpen(true);
                }}
                funcDelete={() => deleteCard(elem.id)}
              />
            ))
          ) : (
            <span className="noAdv">Não possuí mais anúncios</span>
          )}
        </StyledSection>
      </StyledMain>
      <NewAdContainer>
        <button
          onClick={() => {
            setValue([]);
            setModalIsOpen(true);
          }}
        >
          Novo Anúncio
        </button>
      </NewAdContainer>
    </>
  );
};
