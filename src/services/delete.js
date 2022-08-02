import api from "./api";
import { toast } from "react-toastify";

//Adv = advertise -> anúncio de venda ou prestação de serviço

// ROTAS PARA DELETAR (DELETE)

async function deleteJobs(id) {
  api
    .delete(`/jobs/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => toast.success('Prontinho, deletado !'))
    .catch((err) => toast.error('Ops, algo deu errado !'));
}

async function deleteStudioAdv(id) {
  api
    .delete(`/studio_rent/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
}

async function deleteArtistAdv(id) {
  api
    .delete(`/tattoo_artist_schedule/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@DoTattoo:token")}`,
      },
    })
    .then((res) => res)
    .catch((err) => err);
}

export { deleteJobs, deleteStudioAdv, deleteArtistAdv };
