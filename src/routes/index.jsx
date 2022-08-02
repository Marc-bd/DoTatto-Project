import { Route, Routes } from "react-router-dom";
import DashArtist from "../pages/DashArtist";
import DashStudio from "../pages/DashStudio";
import Home from "../pages/Home";
import InProgress from "../pages/InProgress";
import Login from "../pages/Login";
import PerfilPrivate from "../pages/PerfilPrivate";
import PerfilPublic from "../pages/PerfilPublic";
import Signup from "../pages/Signup";

function AllRoutes() {
  return (
    <Routes>
      <Route element={<Home />} exact path="/" />
      <Route element={<Login />} exact path="/login" />
      <Route element={<Signup />} exact path="/signup" />
      <Route exact path="/perfiluser">
        <Route path=":userId" element={<PerfilPrivate />} />
      </Route>
      <Route exact path="/perfil">
        <Route path=":userId" element={<PerfilPublic />} />
      </Route>
      <Route element={<DashArtist />} exact path="/dashartist" />
      <Route element={<DashStudio />} exact path="/dashstudio" />
      <Route element={<InProgress />} path="/inprogress" />
    </Routes>
  );
}


export default AllRoutes;
