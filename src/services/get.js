import api, { apiCep } from "./api";

//Adv = advertise -> anúncio de venda ou prestação de serviço
// ROTAS PARA LER (GET)

async function getUser(id) {
  return api
    .get(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

async function getStudio(id) {
  return api
    .get(`/studio_rent/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}
async function getArtist(id) {
  return api
    .get(`/tattoo_artist_schedule/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}

const showAllStudios = api
  .get("/studio_rent")
  .then((res) => res.data)
  .catch((err) => err);

const showAllArtist = api
  .get("/tattoo_artist_schedule")
  .then((res) => res.data)
  .catch((err) => err);

const getAllUsers = api
  .get("/users", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
    },
  })
  .then((res) => res.data)
  .catch((err) => err);

const showAllJobs = api
  .get("/jobs", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
    },
  })
  .then((res) => res.data)
  .catch((err) => err);

async function getAdress(cep) {
  return apiCep
    .get(`${cep}/json`)
    .then((res) => res.data)
    .catch((err) => err);
}

const showAllHistory = api
  .get("/historyCall", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
    },
  })
  .then((res) => res.data)
  .catch((err) => err);

export {
  showAllStudios,
  showAllArtist,
  getAllUsers,
  showAllJobs,
  showAllHistory,
  getUser,
  getAdress,
  getStudio,
  getArtist,
};
