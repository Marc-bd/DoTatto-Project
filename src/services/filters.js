import api from "./api";
// ROTAS PARA FILTROS (GET)

async function jobFilter(key, value, isLike = false) {
  return api
    .get(isLike ? `/jobs?${key}_like=${value}` : `/jobs?${key}=${value}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

async function studioFilter(key, value, isLike = false) {
  return api
    .get(
      isLike
        ? `/studio_rent?${key}_like=${value}`
        : `/studio_rent?${key}=${value}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => err);
}

async function artistFilter(key, value, isLike = false) {
  return api
    .get(
      isLike
        ? `/tattoo_artist_schedule?${key}_like=${value}`
        : `/tattoo_artist_schedule?${key}=${value}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => err);
}

async function userFilter(key, value, isLike = false) {
  return api
    .get(isLike ? `/users?${key}_like=${value}` : `/users?${key}=${value}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => res.data)
    .catch((err) => err);
}

async function historyFilter(key, value, isLike = false) {
  return api
    .get(
      isLike
        ? `/historyCall?${key}_like=${value}`
        : `/historyCall?${key}=${value}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((err) => err);
}

export { jobFilter, studioFilter, artistFilter, userFilter, historyFilter };
