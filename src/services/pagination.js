import api from "./api";

// ROTAS PARA PAGINAÇÃO (GET)

async function studioPages(page, limit) {
  return api
    .get(`/studio_rent?_page=${page}&_limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

async function artistPages(page, limit) {
  return api
    .get(`/tattoo_artist_schedule?_page=${page}&_limit=${limit}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

export { studioPages, artistPages };
