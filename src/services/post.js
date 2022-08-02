import api from "./api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

//Adv = advertise -> anúncio de venda ou prestação de serviço

// ROTAS PARA CRIAR e LOGAR (POST)

async function Sign(object) {
  const navigate = useNavigate()
  if (object.type === "artist" || object.type === "studio") {
    api
      .post("/register", object)
      .then((res)  => {
        toast.success(`Seja bem vindo ${object.type === "studio" ? "Studio" : "Artist"} `)
        navigate("/login")
      })
      .catch((err) =>  toast.error("Ops, algo deu errado !"));
    return "Sucesso";
  } else {
    console.error("type errado");
    return "type errado";
  }
}

async function login(object) {
  return api
    .post("/login", object)
    .then((res) => {
      const { accessToken } = res.data;
      const { type, id, name } = res.data.user;
      const userInfo = JSON.stringify({ type: type, id: id, name: name });
      console.log(type)
      toast.success(`Hahah, que bom te receber de novo ${name} ! `)
      localStorage.setItem("@DoTattoo:token", accessToken);
      localStorage.setItem("@DoTattoo:userInfo", userInfo);
    })
    .catch((err) => toast.error("Ops, algo deu errado !"));
}

async function createStudioAdv(object) {
  const userinfo = JSON.parse(localStorage.getItem("@DoTattoo:userInfo"));

  if (userinfo.type === "studio") {
    return api
      .post("/studio_rent", object, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
        },
      })
      .then((res) => toast.success('Oferta publicada !'))
      .catch((err) => toast.error('Ops, algo deu errado !'));
  } else {
    toast.error("type errado");
  }
}

async function createArtistAdv(object) {
  const userinfo = JSON.parse(localStorage.getItem("@DoTattoo:userInfo"));
  if (userinfo.type === "artist") {
    return api
      .post("/tattoo_artist_schedule", object, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
        },
      })
      .then((res) => toast.success('Oferta publicada !'))
      .catch((err) => toast.error('Ops, algo deu errado !'));
  } else {
    toast.error("type errado");
  }
}

async function createStudioCall(object) {
  const userinfo = JSON.parse(localStorage.getItem("@DoTattoo:userInfo"));
  if (userinfo.type === "artist") {
    if (object.tattooId === undefined && typeof object.studioId === "number") {
      return api
        .post("/jobs", object, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
          },
        })
      .then((res) => toast.success('Chamada publicada !'))
      .catch((err) => toast.error('Ops, algo deu errado !'));
    } else {
      toast.error("tattooId está errado");
    }
  } else {
    toast.error("Você é um estúdio e não pode chamar um estúdio ");
  }
}

async function createArtistCall(object) {
  const userinfo = JSON.parse(localStorage.getItem("@DoTattoo:userInfo"));
  if (userinfo.type === "studio") {
    if (object.studioId === undefined && typeof object.tattooId === "number") {
      return api
        .post("/jobs", object, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
          },
        })
        .then((res) => toast.success('Chamada publicada !'))
        .catch((err) => toast.error('Ops, algo deu errado !'));
    } else {
      toast.error("studioId está errado");
    }
  } else {
    toast.error("Você é um artista e não pode chamar um de artista ");
  }
}

async function moveToHistory(object) {
  return api
    .post("/historyCall", object, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => toast.success('Arquivado no histórico !'))
    .catch((err) => toast.error('Ops, algo deu errado !'));
}

export {
  login,
  Sign,
  createStudioAdv,
  createArtistAdv,
  createStudioCall,
  createArtistCall,
  moveToHistory,
};
