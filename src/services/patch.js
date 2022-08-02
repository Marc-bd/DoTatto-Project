import api from "./api";
import { toast } from "react-toastify";

//Adv = advertise -> anúncio de venda ou prestação de serviço

// ROTAS PARA MODIFICAR (PATCH)

async function editUser(object) {
  const userInfo = JSON.parse(localStorage.getItem("@DoTattoo:userInfo"));
  if (
    object.type === undefined &&
    object.type === undefined &&
    object.cnpj === undefined &&
    object.cpf === undefined
  ) {
    return api
      .patch(`/users/${userInfo.id}`, object, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
        },
      })
      .then((res) => toast.success('Perfil alterado !'))
      .catch((err) => toast.error('Ops, algo deu errado !'));
  } else {
    toast.error("Você não pode mudar o tipo de conta, email, cpf e cnpj");
  }
}

async function changeStatusJob(object, id) {
  return api
    .patch(`/jobs/${id}`, object, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => toast.success(`Pedido ${object.status}!`))
    .catch((err) => toast.error('Ops, algo deu errado !'));
}

async function editStudioInfoAdv(object, id) {
  return api
    .patch(`/studio_rent/${id}`, object, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => toast.success('Informações alteradas !'))
    .catch((err) => toast.error('Ops, algo deu errado !'));
}

async function editArtistInfoAdv(object, id) {
  return api
    .patch(`/tattoo_artist_schedule/${id}`, object, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => toast.success('Informações alteradas !'))
    .catch((err) => toast.error('Ops, algo deu errado !'));
}

export { editUser, changeStatusJob, editStudioInfoAdv, editArtistInfoAdv };
